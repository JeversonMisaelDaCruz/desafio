

# Configuração do Projeto

## Instalação das Dependências

Antes de iniciar o projeto, instale todas as dependências necessárias executando o comando abaixo:

```bash
yarn install
```

## Compilar e Executar o Projeto

Para rodar o projeto, você pode usar diferentes modos, conforme a necessidade:

### Modo de Desenvolvimento (Watch Mode)

```bash
yarn run start:dev
```

Este comando inicia o servidor no modo de desenvolvimento, monitorando as alterações no código e recarregando automaticamente.

### Modo de Produção

```bash
yarn run start:prod
```

Este comando compila e inicia o servidor em modo de produção, otimizando o desempenho para ambientes de produção.

---

# Docker e Prisma

## Configurando o Docker

Para iniciar uma instância Docker com o banco de dados, use o comando abaixo:

```bash
docker-compose up -d
```

Isso irá inicializar o container Docker em segundo plano.

### Verificar se a Instância Docker Está Rodando

Após iniciar o Docker, você pode verificar o status da instância com o seguinte comando:

```bash
docker ps
```

## Configurando o Prisma

Depois de configurar o Docker e garantir que o banco de dados está rodando, siga os passos abaixo para configurar o Prisma:

### Aplicar Migrações (Desenvolvimento)

```bash
npx prisma migrate dev
```

Esse comando aplica as migrações em modo de desenvolvimento.

### Sincronizar o Banco de Dados com o Schema

```bash
npx prisma db push
```

Esse comando sincroniza o schema do Prisma com o banco de dados sem criar uma migração.

### Gerar o Cliente Prisma

```bash
npx prisma generate
```

Gera o cliente Prisma com base no `schema.prisma` atual.

### Acompanhar o Banco de Dados no Prisma Studio

Para visualizar e gerenciar os dados no banco de dados via interface gráfica, use o Prisma Studio:

```bash
npx prisma studio
```

---

# Configuração do Arquivo `.env`

Crie um arquivo `.env` na raiz do projeto com as seguintes informações de conexão:

```bash
DATABASE_URL="postgresql://admin:488531@localhost:5432/admin"
JWT_SECRET=admin
```

> **Nota:** Um arquivo chamado `secret.env` já está disponível. Se preferir, basta renomeá-lo para `.env`.

---
