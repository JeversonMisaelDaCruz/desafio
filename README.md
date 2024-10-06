
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


## A fazer

Teste
Criar enum no banco de dados para o status

DATABASE_URL="postgresql://admin:488531@localhost:5432/admin"