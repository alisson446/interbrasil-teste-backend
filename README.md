# interbrasil-teste-backend

## Descrição

Projeto backend de autenticação JWT simples feito em Node.js e MongoDB para o teste do InterBrasil Saúde

## Uso

1. Clonar o projeto.
2. Rode `npm install`.
3. Crie seu arquivo `.env` com base no `.env.example`. Tenha em conta que a variável `FIRST_USER_CNPJ` e `FIRST_USER_PASS` serão usadas como credenciais para o login do projeto [interbrasil-teste-frontend](https://github.com/alisson446/interbrasil-teste-frontend).
4. Rode `docker-compose up -d` para baixar e subir o container do banco MongoDB.
4. Rode `npm start`, seu projeto será executado em http://localhost:8000 por padrão.
