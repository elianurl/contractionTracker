![Contraction Tracker Logo](images/contractionTracker.png)

# Contraction Tracker

## Descripción

Contraction Tracker es una aplicación web diseñada para ayudar a las mujeres embarazadas a registrar y monitorear sus contracciones de manera fácil y efectiva. La aplicación permite registrar la hora de inicio de cada contracción, su duración y proporciona la capacidad de exportar estos registros a un archivo PDF para un fácil almacenamiento y referencia.

## Motivación

Esta aplicación fue desarrollada debido a la necesidad personal de mi pareja, quien estaba cerca de dar a luz y necesitaba un método simple pero efectivo para registrar sus contracciones y determinar si estaba en trabajo de parto. Contraction Tracker facilita este proceso al proporcionar una interfaz intuitiva y herramientas para gestionar y exportar los datos de contracción.

## Funcionalidades

- Registro de contracciones con detalle de hora y duración.
- Exportación de registros a un archivo PDF para almacenamiento local.
- Reinicio de registros para comenzar un nuevo monitoreo.
- Interfaz sencilla y fácil de usar.

## Tecnologías Utilizadas

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Librerías y Herramientas**: PDFKit (para la generación de PDF), fetch API (para comunicación cliente-servidor)

## Instalación y Uso

1. **Clona el Repositorio:**
git clone https://github.com/eliandev0/ContractionTracker.git
cd ContractionTracker


2. **Instala las Dependencias:**
npm install


3. **Ejecuta la Aplicación:**
node app.js

La aplicación estará disponible en: `http://localhost:3000`

## Estructura de Archivos

- `app.js`: Punto de entrada de la aplicación.
- `public/`: Carpeta que contiene los archivos estáticos (HTML, CSS, imágenes).
- `routes/`: Carpeta que contiene los enrutadores de la aplicación.
- `registros.js`: Enrutador para manejar los registros de contracciones.
- `track.js`: Enrutador para exportar los registros a PDF y reiniciar registros.

## Contribución

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Crea un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz commit de ellos (`git commit -am 'Agrega nueva característica'`).
4. Sube tus cambios a la rama (`git push origin feature/nueva-caracteristica`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Para más detalles, por favor consulta el archivo `LICENSE`.

---

Desarrollado por [ELIANDev0](https://github.com/eliandev0)

