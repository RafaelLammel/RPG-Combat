# RPG Combat Platform

RPG Combat Platform é uma plataforma online para ministrar combates em RPG de mesa de forma simples e descomplicada.

### Por quê?

Devido a quarentena do coronavírus, eu e uns amigos tivemos a ideia de começar uma camapanha de RPG online. Porém, rápidamente percebemos que não é tão simples ministrar o combate, não conheciamos boas ferramentas gratuítas e as mais completas (Como Roll20) eram muito complexas e demoradas para arrumar. Queríamos algo simples, apenas para marcar a posição dos nossos personagens, inimigos e obstáculos em um mapa.

### Como funciona?

RPG Combat Platform funciona de uma forma extremamente simples: acesse o link https://rpg-combat.herokuapp.com. Após a URL, coloque "/nome-do-mapa" e pronto, a plataforma vai carregar o mapa com o nome fornecido, ou criar um mapa novo com o nome fornecido que é salvo automáticamente conforme alterações. Dentro do mapa, use o botão esquerdo para pintar uma posição (existe uma seleção de cores no canto superior esquerdo) ou o botão direito para limpar uma posição. (Para interfaces Touch, selecione branco na seleção de cores para apagar a posição desejada). O progresso da fase é salvo automáticamente conforme ela é desenhada. Embora todos possam colaborar em tempo real, o ideal é que apenas uma pessoa mexa de cada vez. Melhorias para isso serão aplicadas no futuro.

### Tecnologias usadas

- Desenvolvimento
  - Node.JS
    - Express - como Web Server
    - Socket.IO - como comunicador RealTime
    - Mongoose - para comunicação Node.JS + MongoDB
    - EJS - como Template Engine
  - HTML
  - CSS
- Outras
  - Heroku - hospedagem cloud
  - MongoDB Atlas - hospedagem MongoDB

### Para Devs

Se tiver interesse em mexer no código, seja para colaboração ou só pra fuçar mesmo, recomendo que utilize o Branch Dev que sempre está mais atualizado. É necessário possuir o node e o npm ou yarn, junto com uma instância MongoDB. Siga os passos:

- Clone o projeto
- Dentro da pasta com o clone, rode *npm install*
- Crie um arquivo .env a partir do arquivo .env.example e preencha com os dados do seu desenvolvimento local 
  - APP_URL = URL da aplicação (padrão: http://localhost:3000)
  - MONGO_URL = URL da instância mongoDB

### Lista de melhorias para o futuro:

* [ ] Adicionar página inicial com apresentação da plataforma + criação de sala
* [ ] Permitir usuário alterar tamanho da sala
* [ ] Melhorar e adicionar itens na interface do mapa
* [ ] Corrigir bug que ao entrar na sala com alguém pintando, não aparecem as últimas alterações