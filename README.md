
# nic-explore-api-ts

API REST escrita en TypeScript para gestionar departamentos y lugares. Este README describe las tecnologías utilizadas y cómo instalar/ejecutar la API localmente.

## Tecnologías

- Node.js + TypeScript
- Express (v5)
- TypeORM (Postgres)
- jsonwebtoken (JWT) para autenticación
- bcrypt para hashing de contraseñas
- class-validator + class-transformer para validación de DTOs
- Jest + ts-jest para tests
- pnpm (recomendado) o npm como gestor de paquetes

## Requisitos

- Node.js 18+ (o versión LTS reciente)
- PostgreSQL (o ajusta `src/config/database.ts` para otra base de datos)
- pnpm (recomendado) o npm

## Instalación

Clona el repositorio y entra al directorio:

```bash
git clone <repo-url>
cd nic-explore-api-ts
```

Instala dependencias (pnpm recomendado):

```bash
pnpm install
# o con npm
# npm install
```

## Variables de entorno

Copia `.env.example` a `.env` y ajusta los valores:

```bash
cp .env.example .env
# Edita .env con tu editor preferido
```

Variables importantes en `.env`:

- `DB_HOST`, `DB_PORT`, `DB_USERNAME`, `DB_PASSWORD`, `DB_NAME`
- `JWT_SECRET`, `JWT_EXPIRES_IN`

## Compilar y ejecutar

Compila el proyecto y ejecútalo:

```bash
pnpm run build
pnpm start
# En desarrollo puedes usar:
# pnpm run dev
```

## Ejecutar tests

```bash
pnpm test
# o npm test
```

## Lint

```bash
pnpm run lint
```

## Rutas principales (resumen)

- `POST /auth/register` — registrar usuario
- `POST /auth/login` — iniciar sesión (devuelve JWT)
- `GET /users` — listar usuarios
- `GET /places` — listar lugares
- `POST /places` — crear lugar

---

Si quieres, puedo añadir ejemplos de peticiones (curl/Postman), instrucciones de despliegue con Docker, o pasos para inicializar la base de datos.
