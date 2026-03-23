## 1. Instalar dependencias

npm install
npm install express prisma @prisma/client bcryptjs jsonwebtoken dotenv zod @prisma/adapter-pg pg
npm install -D typescript ts-node nodemon @types/express @types/node @types/bcryptjs @types/jsonwebtoken jest ts-jest supertest @types/supertest @types/jest @types/pg

## 2. Crear el archivo .env en la raiz del proyecto con este contenido:

NODE_ENV=development
PORT=3000
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/cultivapp_db
JWT_SECRET=reemplaza_con_un_string_largo
JWT_EXPIRES_IN=7d

## 3. Inicializar Prisma

npx prisma init --datasource-provider postgresql
npx prisma generate

## 4. Levantar la base de datos

docker compose up -d

Verificar:
docker ps

## 5. Ejecutar migraciones

npx prisma migrate dev --name init

## 6. Iniciar el servidor

npm run dev
