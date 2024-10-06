
## Project setup

```bash
$ yarn install
```

## Compile and run the project

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Run tests

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Docker

```bash
# iniciar a instancia docker com o banco de dados 
$ docker-compose up -d

# Para verificar se a instancia esta rodando
$ docker ps

```
## Testar rotas
```
http://localhost:3000/leads POST - Cadastrar lead
{
  "name": "Nome do Lead",
  "phone": "Telefone do Lead",
  "email": "emaildolead@example.com"
}
http://localhost:3000/leads GET - LISTAR TODOS
Sem nenhum parametro apenas realizar um get

http://localhost:3000/leads/:id GET BY ID
Passar o parametro na url

http://localhost:3000/leads UPDATE -
PASSAR AS INFORMAÇÕES QUE DESEJA ALTERAR
{
    "id": 1,
    "name": "JOAZINHO",
    "phone": "Telefone do Lead",
    "email": "emaildolead@example.com",

}
```



## A fazer

Teste
Criar enum no banco de dados para o status

## CONEXÃO NO ARQUIVO .ENV
```
DATABASE_URL="postgresql://admin:488531@localhost:5432/admin"
```
