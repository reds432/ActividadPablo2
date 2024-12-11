// Crear y agregar los estilos CSS dinámicamente
const style = document.createElement('style');
style.textContent = `
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  header {
    background-color: #55d3d1;
    color: white;
    padding: 15px;
    text-align: center;
  }
  nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    background-color: #333;
  }
  nav ul li {
    margin: 0 10px;
  }
  nav ul li a {
    color: white;
    text-decoration: none;
    padding: 10px 20px;
    display: block;
  }
  nav ul li a:hover {
    background-color: #d03b33;
  }
  main {
    padding: 20px;
  }
  .image-gallery img {
    width: 200px;
    height: auto;
    margin: 10px;
    border: 2px solid #ddd;
    border-radius: 5px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
  }
  table th, table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  table th {
    background-color: #63b6b5;
    color: white;
  }
  footer {
    text-align: center;
    background-color: #333;
    color: white;
    padding: 10px;
  }
`;
document.head.appendChild(style);

// Crear el encabezado
const header = document.createElement('header');
header.innerHTML = `
  <h1>Página Dinámica</h1>
  <p>Mi pagina</p>
`;
document.body.appendChild(header);

// Crear el menú de navegación
const nav = document.createElement('nav');
nav.innerHTML = `
  <ul>
    <li><a href="#inicio">Inicio</a></li>
    <li><a href="#galeria">Galería</a></li>
    <li><a href="#tabla">Tabla</a></li>
    <li><a href="#contacto">Contacto</a></li>
  </ul>
`;
document.body.appendChild(nav);

// Crear el contenido principal
const main = document.createElement('main');
main.innerHTML = `
  <section id="inicio">
    <h2>Bienvenido</h2>
    <p>Esta es una página web dinámica creada.</p>
  </section>
  <section id="galeria" class="image-gallery">
    <h2>Galería de Imágenes</h2>
    <div>
      <img src="https://images.pexels.com/photos/13907293/pexels-photo-13907293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Imagen 1">
      <img src="https://images.pexels.com/photos/159027/bokeh-blue-light-blue-neon-159027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Imagen 2">
      <img src="https://images.pexels.com/photos/4881552/pexels-photo-4881552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Imagen 3">
    </div>
  </section>
  <section id="tabla">
    <h2>Tabla</h2>
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Ciudad</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Juan</td>
          <td>25</td>
          <td>México</td>
        </tr>
        <tr>
          <td>Ana</td>
          <td>30</td>
          <td>España</td>
        </tr>
        <tr>
          <td>Pedro</td>
          <td>28</td>
          <td>Chile</td>
        </tr>
      </tbody>
    </table>
  </section>
  <section id="contacto">
    <h2>Contacto</h2>
    <form id="contactForm">
      <label for="name">Nombre:</label>
      <input type="text" id="name" name="name" required>
      <label for="email">Correo Electrónico:</label>
      <input type="email" id="email" name="email" required>
      <button type="submit">Enviar</button>
    </form>
    <p id="formMessage"></p>
  </section>
`;
document.body.appendChild(main);

// Crear el pie de página
const footer = document.createElement('footer');
footer.innerHTML = `
  <p>&copy; 2024 - Página</p>
`;
document.body.appendChild(footer);

// Añadir funcionalidad al formulario de contacto
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  formMessage.textContent = `¡Gracias por contactarnos, ${name}!`;
  form.reset();
});
