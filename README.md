# site-doisnovemeia
Repositório dedicado ao desenvolvimento, por parte da equipe do projeto de pesquisa OAS(Open Automotive Simulator), do site da Empresa Junior de publicidade DoisNoveMeia da Unb.

# Guia de como rodar o projeto

## Pré-requisitos
- Node.js (≥16.x) + npm/yarn/pnpm
- Docker (para rodar o conteiner do backend)
- Git (para clonar o repositório)

---
Antes de tudo, acesse:

```bash
cd front-end/doisnovemeia/
```
## Frontend

Primeiro instale as dependências com o node:

```bash
npm install
```
Depois rode o server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Após isso, algo como a saída abaixo deve aparecer no terminal:

```bash
~/site-doisnovemeia/front-end/doisnovemeia$ npm run dev

> doisnovemeia@0.1.0 dev
> next dev --turbopack

   ▲ Next.js 15.1.8 (Turbopack)
   - Local:        http://localhost:3000
   - Network:      http://10.0.0.245:3000
   - Environments: .env

 ✓ Starting...
 ✓ Ready in 5s
```

---

## Backend

Com o docker instalado, e já no diretório `front-end/doisnovemeia/` siga a seguinte lista de comandos.

### 1. Subindo conteiner do docker
```bash
docker-compose up
```
Inicia todos os serviços definidos no arquivo docker-compose.yml, incluindo o backend e o banco de dados.

### 2. Rodando migrations
```bash
npx prisma migrate generate dev
```
Executa as migrações do banco de dados para garantir que a estrutura esteja atualizada, utilizando o Prisma.

### 3. Observando o compostamento do prisma
```bash
npx prisma studio
```
Abre uma interface gráfica para visualizar e manipular os dados no banco de dados através do Prisma. Uma saída como a abaixo é esperada:

```bash
~/site-doisnovemeia/front-end/doisnovemeia$ sudo npx prisma studio
Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma
Prisma Studio is up on http://localhost:5555
```




