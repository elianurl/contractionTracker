![Contraction Tracker Logo](https://raw.githubusercontent.com/eliandev0/contractionTracker/main/public/contractionTracker.png)

# Contraction Tracker

## Descripción

Contraction Tracker es una aplicación web diseñada para ayudar a las mujeres embarazadas a registrar sus contracciones de manera sencilla. La aplicación permite registrar la hora de cada contracción, así como su duración. Proporciona la función de exportar en formato PDF estos registros para un fácil almacenamiento y referencia.

## Motivación

Esta aplicación fue desarrollada debido a la necesidad personal de mi mujer, quien estaba cerca de dar a luz y necesitaba un método simple pero efectivo para registrar sus contracciones y determinar si estaba de parto. Contraction Tracker facilita este proceso al proporcionar una interfaz intuitiva, herramientas para gestionar y exportar los datos, además se han aplicado metodos de UI/UX Designer para que la experiencia de usuario sea sencilla, intuitiva y agradable.

## Funcionalidades

- Registro de contracciones con detalle de hora, minuto y duración.
- Exportación de registros a un archivo PDF para almacenamiento local.
- Reinicio de registros para comenzar un nuevo monitoreo.
- Interfaz sencilla intuitiva y fácil de usar.

## Funcionamiento

- Encontamos un logo con el nombre de la aplicación, este nos sirve además para recargar la página de forma rapida si fuera necesario.
- El botón "CONTRACCIÓN" nos sirve para comenzar el registro de contracción, con su hora y minuto correspondiente, este mismo botón si se mantiene presionado almacenará los segundos hasta que se suelte para registrar la longitud de la contracción actual.
<img src="https://drive.google.com/file/d/1wSR5h9-SokZcg_zs_QYFCHC24crvD5ZU/view?usp=drive_link" alt="Contraction Tracker Logo" width="200" height="200">

- El contenedor desplazable nos mostrará el registro actual que llevamos activo con un comodo scroll en el mismo para no perder de vista los elementos de la página y evitar hacer scroll por la misma.
- El botón "EXPORTAR REGISTRO" nos genera automáticamente un PDF con los datos registrados hasta el momento, haciendolos de facil visualización y entendimiento en el mismo.
- El botón "NUEVO REGISTRO" nos limpia el registro para comenzar uno nuevo si así se deseara.

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
- `registros.js`: Enrutador para manejar los registros de contracciones, exportarlos a PDF y reiniciarlos.

## Contribución

Si deseas contribuir a este proyecto, sigue estos pasos:

1. Crea un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz commit de ellos (`git commit -am 'Agrega nueva característica'`).
4. Sube tus cambios a la rama (`git push origin feature/nueva-caracteristica`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Para más detalles, por favor consulta el archivo `LICENSE`.

---

Desarrollado por [ELIANDev0](https://github.com/eliandev0)

