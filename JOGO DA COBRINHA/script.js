// Elementos do Jogo
const gameArea = document.getElementById('game-area');
const gameCanvas = document.getElementById('gameCanvas');
const ctx = gameCanvas.getContext('2d');
const scoreElement = document.getElementById('current-score');
const highScoreElement = document.getElementById('high-score');
const pauseBtn = document.getElementById('pauseBtn');
const restartBtn = document.getElementById('restartBtn');

// Elementos do Menu
const startMenu = document.getElementById('start-menu');
const difficultyButtons = document.querySelectorAll('.difficulty-btn');

// Efeitos Sonoros
const eatSound = document.getElementById('eatSound');
const gameOverSound = document.getElementById('gameOverSound');

const gridSize = 20;
const canvasSize = gameCanvas.width / gridSize;
let snake, food, direction, score, isGameOver, isPaused, baseSpeed, gameInterval;
let highScore = localStorage.getItem('snakeHighScore') || 0;

function setGameSpeed() {
  const speedIncrease = Math.floor(score / 3);
  let currentGameSpeed = baseSpeed - (speedIncrease * 10);
  if (currentGameSpeed < 50) currentGameSpeed = 50;

  if (gameInterval) clearInterval(gameInterval);
  gameInterval = setInterval(gameLoop, currentGameSpeed);
}

function startGame(speed) {
  baseSpeed = speed;
  snake = [{ x: 15, y: 15 }];
  direction = 'right';
  score = 0;
  isGameOver = false;
  isPaused = false;
  scoreElement.textContent = '0';
  highScoreElement.textContent = highScore;
  pauseBtn.textContent = 'Pausar (Espaço)';
  
  startMenu.classList.add('hidden');
  gameArea.classList.remove('hidden');

  generateFood();
  setGameSpeed();
}

function showStartMenu() {
    gameArea.classList.add('hidden');
    startMenu.classList.remove('hidden');
}

function drawSnake() {
  ctx.fillStyle = 'lime';
  snake.forEach(part => {
    ctx.fillRect(part.x * gridSize, part.y * gridSize, gridSize, gridSize);
  });
}

function drawFood() {
  ctx.fillStyle = 'red';
  ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);
}

function generateFood() {
  food = {
    x: Math.floor(Math.random() * canvasSize),
    y: Math.floor(Math.random() * canvasSize)
  };
}

function updateHighScore() {
  if (score > highScore) {
    highScore = score;
    localStorage.setItem('snakeHighScore', highScore);
    highScoreElement.textContent = highScore;
  }
}

function checkCollision(head) {
  if (head.x < 0 || head.x >= canvasSize || head.y < 0 || head.y >= canvasSize) {
    return true;
  }
  for (let i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      return true;
    }
  }
  return false;
}

function drawMessage(message1, message2) {
  ctx.fillStyle = 'red';
  ctx.font = '50px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(message1, gameCanvas.width / 2, gameCanvas.height / 2);

  if (message2) {
    ctx.fillStyle = 'white';
    ctx.font = '20px sans-serif';
    ctx.fillText(message2, gameCanvas.width / 2, gameCanvas.height / 2 + 40);
  }
}

function gameLoop() {
  if (isPaused || isGameOver) return;

  const head = { x: snake[0].x, y: snake[0].y };

  switch (direction) {
    case 'right': head.x++; break;
    case 'left': head.x--; break;
    case 'up': head.y--; break;
    case 'down': head.y++; break;
  }

  if (checkCollision(head)) {
    isGameOver = true;
    gameOverSound.play();
    updateHighScore();
    drawMessage('SE FUDEU', 'Aperte Enter para voltar ao menu');
    return;
  }

  snake.unshift(head);

  if (head.x === food.x && head.y === food.y) {
    score++;
    scoreElement.textContent = score;
    eatSound.play();
    generateFood();
    setGameSpeed();
  } else {
    snake.pop();
  }

  ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
  drawFood();
  drawSnake();
}

function togglePause() {
  if (isGameOver) return;
  isPaused = !isPaused;
  if (isPaused) {
    pauseBtn.textContent = 'Continuar (Espaço)';
    drawMessage('PAUSADO');
  } else {
    pauseBtn.textContent = 'Pausar (Espaço)';
  }
}

function handleKeyPress(event) {
  const keyPressed = event.key;

  if (isGameOver) {
    if (keyPressed === 'Enter') {
      showStartMenu();
    }
    return;
  }

  if (keyPressed === ' ') {
    togglePause();
  }
  
  if (isPaused) return;

  const goingUp = direction === 'up';
  const goingDown = direction === 'down';
  const goingRight = direction === 'right';
  const goingLeft = direction === 'left';

  if (keyPressed === 'ArrowUp' && !goingDown) direction = 'up';
  if (keyPressed === 'ArrowDown' && !goingUp) direction = 'down';
  if (keyPressed === 'ArrowLeft' && !goingRight) direction = 'left';
  if (keyPressed === 'ArrowRight' && !goingLeft) direction = 'right';
}

// Listeners de Eventos
document.addEventListener('keydown', handleKeyPress);
pauseBtn.addEventListener('click', togglePause);
restartBtn.addEventListener('click', showStartMenu);

difficultyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const speed = parseInt(button.getAttribute('data-speed'));
        startGame(speed);
    });
});

// Exibe a melhor pontuação inicial
highScoreElement.textContent = highScore;