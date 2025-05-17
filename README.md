<h1>Frontend da Lista de Tarefas em Tempo Real</h1>

<h3>Resumo da aplicação</h3>

Esta aplicação desenvolvida em React.js para uma lista de tarefas colaborativa com atualização em tempo real. Os usuários podem adicionar, listar, marcar como concluídas e excluir tarefas, e todas as ações são sincronizadas instantaneamente entre os clientes conectados, usando WebSocket (Socket.IO).


<h3>Tecnologias utilizadas</h3>
React.js — biblioteca JavaScript para construção da interface de usuário.

Socket.IO-client — para comunicação em tempo real com o backend via WebSocket.

Axios — para realizar requisições HTTP à API REST do backend.

CSS3 — estilização responsiva e moderna da interface.


Para rodar o projeto localmente, siga os passos abaixo:

1. Clone este repositório com:

git clone https://github.com/SrTomaz/FrontendListaTarefas.git

2. Navegue até a pasta do projeto:

cd frontend

3. Instale as dependências:
npm install axios socket.io-client
npm install --save-dev @testing-library/react @testing-library/jest-dom

5. Inicie o frontend com:
npm start

6. Acesse no navegador o endereço:

http://localhost:3000


<h3>Testes</h3>

para executar os testes siga as instruções

1. Navegue até a pasta do projeto:

cd frontend
cd src  
cd components

2.Execute o comando:

npm test






