## Requisitos

- Node.js 22 LTS
- Docker Desktop
- Git

## Instalacion

```bash
git clone <url-del-repositorio>
cd cultivapp-backend
npm install
```

## Variables de entorno

```env
NODE_ENV=development
PORT=3000
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/cultivapp_db
JWT_SECRET=reemplaza_con_un_string_largo
JWT_EXPIRES_IN=7d
```

## Base de datos

```bash
docker compose up -d
npx prisma migrate dev
npx prisma generate
```

## Iniciar

```bash
npm run dev
```

## Scripts

`npm run dev` — desarrollo | `npm run build` — compilar | `npm start` — produccion | `npm test` — pruebas | `npm run test:coverage` — cobertura | `npm run db:migrate` — migraciones | `npm run db:generate` — cliente Prisma | `npm run db:studio` — Prisma Studio

## Produccion

express, prisma, @prisma/client, bcryptjs, jsonwebtoken, dotenv, zod

## Desarrollo

typescript, ts-node, nodemon, jest, ts-jest, supertest, @types/express, @types/node, @types/bcryptjs, @types/jsonwebtoken, @types/jest, @types/supertest
