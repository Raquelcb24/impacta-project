
# Landing Page para Impacta - Agencia de publicidad y Branding

<img src="https://github.com/user-attachments/assets/4172e5bd-8423-4d34-894f-685073423079" alt="logo-impacta" width="200" />

Esta landing page es un proyecto Full Stack realizado con **React** y **Vite** y para el diseño **CSS** y **Tailwind CSS**.
Para la parte correspondiente al back está realizada con PHP y MySQL.
El proyecto está diseñado para ser completamente responsive, adaptándose a diferentes tamaños de pantalla, desde móviles (a partir de 375 px) hasta pantallas grandes (2560px), pasando también por pantallas compatibles con tablet y portátiles (768pz, 1024px y 1440px).

# Introducción
Este proyecto consiste en una landing page para Impacta, que incluye:

   * Un header con una barra de navegación para facilitar el acceso a diferentes secciones de la web, acceso directo a la web oficial de Impacta haciendo click en el logo de la empresa y a sus principales redes sociales (Instagram y Facebook).
    
   * Un carrusel de imágenes en el header para añadir un toque dinámico a la página.

   * Secciones informativas sobre la empresa y sus clientes más destacados.

  * Un formulario de contacto para facilitar la comunicación entre cliente y empresa.

La página está optimizada para diferentes dispositivos y resoluciones, asegurando una experiencia de usuario fluida en todos los tamaños de pantalla.

# Decisiones de Diseño 📱
    
* Tecnologías Utilizadas
  * **React y Vite** para una experiencia de desarrollo rápida y eficiente.
  * **CSS y Tailwind CSS** para un diseño moderno y responsive.

* Diseño Responsive:
  * La página está diseñada para adaptarse a diferentes tamaños de pantalla: móviles (a partir de 375px), tabletas (a partir de 768px) y pantallas grandes (hasta 2560px).

* Header
  * Incluye una barra de navegación con enlaces a la web principal, secciones del sitio y redes sociales.
  * Un carrusel de imágenes se incorpora para hacer la página más interactiva y atractiva.

* Secciones Informativas:
  * Se proporciona información sobre la empresa y los clientes destacados, con un diseño claro y accesible.

* Formulario de Contacto
  * Facilita la comunicación directa con los clientes que visiten la página.

# Instalación 	💻

* Para instalar y ejecutar el proyecto localmente, sigue estos pasos:
**Front-end**

  1. Clona el repositorio: 
  ````
  git clone https://github.com/Raquelcb24/impacta-project
  ````
  2. Abre la carpeta raíz del proyecto en tu editor de código:
  ````
  cd impacta-project
  ````
  3. Instala las dependencias:
  ````
  npm install
  ````
  4. Inicia el servidor de desarrollo::
  ````
  npm run dev
  ````
**Back-end**

Antes de empezar, asegúrate de tener instalado y configurado XAMPP en tu sistema.
 ### 1. Descargar e Instalar XAMPP

Descarga e instala XAMPP desde el siguiente enlace:

- [XAMPP](https://www.apachefriends.org/es/index.html)

Sigue las instrucciones del instalador para completar la instalación.

### 2. Configuración de XAMPP

1. **Arrancar Apache y MySQL**:
   - Abre el panel de control de XAMPP.
   - Inicia los servicios de Apache y MySQL haciendo clic en el botón "Start" correspondiente a cada uno.

### 3. Configuración de la Base de Datos

1. **Accede a phpMyAdmin**:
   - Abre tu navegador y ve a [http://localhost/phpmyadmin](http://localhost/phpmyadmin).
   - Crea una nueva base de datos para tu proyecto (por ejemplo, `impacta-project`).

2. **Importar Estructura de la Base de Datos**:
   - En el panel de phpMyAdmin, selecciona la base de datos que acabas de crear.
   - Usa la opción para importar una estructura de base de datos si tienes un archivo `.sql` para ello. Asegúrate de que las tablas y los campos estén correctamente configurados.

### 4. Ejecutar el Proyecto

1. **Coloca el Proyecto en el Directorio de XAMPP**:
   - Copia la carpeta del proyecto a `htdocs` en el directorio de instalación de XAMPP (por ejemplo, `C:\xampp\htdocs\impacta-project`).

2. **Accede al Proyecto**:
   - Abre tu navegador y navega a [http://localhost/impacta-project/index.php](http://localhost/impacta-project/index.php) para asegurarte de que el back-end está funcionando.

