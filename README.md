# AV2
A AV2 terá duração de 2 semanas, deve ser entregue até a meia noite do dia 06/03/2025.  
Cada aluno deve criar um fork deste repositório e modificá-lo de acordo com a proposta escolhida abaixo.  
A utilização de [github pages](https://pages.github.com/) é obrigatória.  
Para melhor aproveitamento, utilize o tutorial sobre o [ambiente de desenvolvimento](https://github.com/prof-hfabio/ambiente) para se ambientar, será proveitoso para o resto da disciplina (e possivelmente para a sua carreira)

- [Proposta 1 - Jogo Interativo – Campo Minado](#proposta-1)
- [Proposta 2 - Quiz Interativo sobre Desenvolvimento Web](#proposta-2)
- [Proposta 3 - Lista de Tarefas (To-Do List) com Armazenamento Local](#proposta-3)

**Sugestão de fontes para pesquisa e documentação**:
- [MDN - Mozilla Developer Network - web docs](https://developer.mozilla.org/)
- [DevDocs](https://devdocs.io/)

## Proposta 1 
**Descrição**: O aluno deverá criar uma página web que simule o jogo estilo “campo minado”
O projeto deve utilizar:
- HTML5 e CSS3 para a criação e estilização da interface do jogo
- JavaScript para implementar a lógica do jogo utilizando a DOM API
  - distribuição dos campos
  - detecção de cliques
  - marcação de minas
  - tratamento de eventos
- A quantidade de minas e de linhas x colunas deve ser configurável pelo usuário
- ao vencer a página deve emitir um som de vitória
- responsividade não será cobrado, mas é um adicional

### Critério de avaliação 
- A implementação de código, o system-design, A utilização de um framework de front-end (React, Vue ou Svelte) e a utilização de conteineres do docker (dockerfile e/ou docker-compose) serão considerados como pontuação extra.

## Proposta 2
**Descrição**: O aluno deverá criar um Quiz Interativo sobre Desenvolvimento Web 
O projeto deve conter:
- HTML5 e CSS3 para a criação e estilização da interface
- JavaScript para implementar a lógica utilizando a DOM API
- Pelo menos dois tipos de pergunta:
  - Multipla escolha (até 5 opções)
  - tela dividida (escolha entre uma das duas opções)
- As perguntas devem ser randômicas e a ordem das respostas deve ser randomizada
- 5 perguntas devem ser feitas antes do resultado
- A página deve ser responsiva e funcionar corretamente em 2 tamanhos de tela (1920x1080 e 430x932)
- No final o resultado deve gerar um score de desempenho como um modal e reproduzir um som caso o desempenho tenha sido > 50%
### Critério de avaliação 
- A implementação de código, o system-design, A utilização de um framework de front-end (React, Vue ou Svelte) e a utilização de conteineres do docker (dockerfile e/ou docker-compose) serão considerados como pontuação extra.

## Proposta 3
**Descrição**: O aluno deverá criar um projeto de Lista de Tarefas (To-Do List) com Armazenamento Local:
- HTML5 e CSS3 para a criação e estilização da interface
- JavaScript para implementar a lógica utilizando a DOM API
  - permitir a adição, remoção e marcação de tarefas como concluídas, interagindo com o DOM
  - cada tarefa que ainda está em execução deve mostrar um timer de quanto tempo faz desde que foi adicionada formatado em `DD HH:MM:SS`
- Estilização básica com CSS3 (cores, fontes, layouts simples).
- Integrar o armazenamento local (localStorage) para persistir as tarefas entre acessos
- A página deve ser responsiva e funcionar corretamente em 2 tamanhos de tela (1920x1080 e 430x932)
- animações são obrigatórias nas seguintes ações
  - hover
  - click
  - adicionar
  - remover
### Critério de avaliação 
- A implementação de código, o system-design, A utilização de um framework de front-end (React, Vue ou Svelte) e a utilização de conteineres do docker (dockerfile e/ou docker-compose) serão considerados como pontuação extra.
