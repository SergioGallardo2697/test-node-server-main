# test-node-server

## Requisitos

- Node.js
- PostgreSQL

## Instalación

1. Clona el repositorio en tu máquina local usando `git clone https://github.com/SergioGallardo2697/test-node-server-main.git`.

2. Navega a la carpeta del proyecto y ejecuta `npm install` para instalar todas las dependencias del proyecto.

## Configuración de la base de datos

Este proyecto utiliza PostgreSQL. Necesitas tener una base de datos PostgreSQL configurada para poder usarla. La base de datos debería llamarse `test`.

1. Asegúrate de tener PostgreSQL instalado en tu máquina. Si no lo tienes, puedes descargarlo [aquí](https://www.postgresql.org/download/).

2. Configura tu base de datos PostgreSQL. Crea una base de datos llamada `test`.

3. Navega a la carpeta `config/` en el proyecto y abre el archivo `db.js`. Aquí, configura el usuario y la contraseña de tu base de datos PostgreSQL en la cadena de conexión de Sequelize. Debería verse así:

    ```javascript
    const sequelize = new Sequelize("postgres://[usuario]:[contraseña]@localhost:5432/test");
    ```

    Reemplaza `[usuario]` y `[contraseña]` con tu nombre de usuario y contraseña de PostgreSQL.

## Ejecución del Proyecto

Para ejecutar el proyecto, navega a la raíz del proyecto y ejecuta el siguiente comando:

```javascript
  nodemon index.js
```
El servidor se ejecutará en `http://localhost:3001`.

## Endpoints

### POST /users

Crea un nuevo usuario. El cuerpo de la solicitud debe incluir `nombres`, `apellidoPaterno`, `apellidoMaterno`, `correo`, `telefono` y `genero`.