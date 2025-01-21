# Alura Geek 🛒

Este proyecto forma parte del Challenge propuesto por **Alura Latam**. Consiste en un sitio web para la venta de productos geek, donde los usuarios pueden agregar o eliminar productos dinámicamente utilizando `json-server`.

## Características ✨

- **Gestión dinámica de productos**: Agrega y elimina productos en tiempo real.
- **Integración con JSON-Server**: Simula un backend para gestionar datos.
- **Diseño responsivo**: Optimizado para todos los dispositivos.
- **Interfaz temática geek**: Diseño divertido y atractivo para los fans de la cultura geek.

## Tecnologías Utilizadas 🛠️

- **HTML5**: Para la estructura del sitio web.
- **CSS3**: Para los estilos y diseño responsivo.
- **JavaScript (ES6+)**: Para las interacciones dinámicas.
- **JSON-Server**: Para manejar un backend simulado.

## Como ejecutar el proyecto

1. **Instala las dependencias:**
    
    ```bash
    npm install
    ```
    
2. **Instala JSON-Server** (si no lo tienes instalado):
    
    ```bash
    npm install -g json-server
    ```
    
3. **Inicia JSON-Server**:
    
    ```bash
    json-server --watch db.json --port 3000
    ```
    
    Este comando iniciará un servidor en `http://localhost:3000`.
    
4. **Abre el proyecto**:
    - Abre `index.html` directamente en tu navegador, o
    - Usa un servidor en vivo (por ejemplo, la extensión Live Server de VS Code) para servir el proyecto.

## Estructura del Proyecto 📂

- **index.html**: Página principal con la lista de productos.
- **styles/**: Contiene los archivos CSS para los estilos.
- **scripts/**: Incluye los archivos JavaScript para las interacciones dinámicas.
- **db.json**: Archivo de base de datos simulado para JSON-Server.

## Capturas de Pantalla 📸

![imgs/img-readme.png]()

## Desafíos y Aprendizajes 📚

- **Uso de JSON-Server**: Simular operaciones de backend para una experiencia más realista.
- **Manipulación dinámica del DOM**: Manejar la adición y eliminación de productos de forma interactiva.
- **Diseño responsivo**: Garantizar la usabilidad en diferentes dispositivos.