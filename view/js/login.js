/*document.getElementById('loginForm').addEventListener('submit', async function(event) {  
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario  
  
    const username = document.getElementById('username').value;  
    const password = document.getElementById('password').value;  
  
    const response = await fetch('http://localhost:8087/login', {  
        method: 'POST',  
        headers: {  
            'Content-Type': 'application/json'  
        },  
        body: JSON.stringify({ username, password })  
    });  
  
    const data = await response.json();  
  
    if (response.ok) {  
        alert('Inicio de sesión exitoso');  
        // Aquí puedes redirigir al usuario o almacenar el token  
    } else {  
        alert(data.message);  
    }  
  });
  */
  /*document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    const response = await fetch('http://localhost:3001/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });
  
    const data = await response.json();
  
    if (response.ok) {
      const token = data.token;
      localStorage.setItem('token', token);
      window.location.href = 'index.html';
    } else {
      alert(data.message);
    }
  });*/

 /* const formulario = document.querySelector('#loginForm');
const username = document.querySelector('#username');
const password = document.querySelector('#password');

formulario.addEventListener('submit', async (event) => {
  event.preventDefault();

  const user = {
    username: username.value,
    password: password.value
  };

  const response = await fetch('http://localhost:3001/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });

  const data = await response.json();

  if (response.ok) {
    const token = data.token;
    localStorage.setItem('token', token);
    window.location.href = 'principal.html';
  } else {
    alert('Error al iniciar sesión');
  }
});*/

const formulario = document.querySelector('#loginForm');
const username = document.querySelector('#username');
const password = document.querySelector('#password');

formulario.addEventListener('submit', async (evento) => {
  evento.preventDefault();
  const usuario = { username: username.value, password: password.value };

  const respuesta = await fetch('http://localhost:3016/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(usuario),
  });

  const datos = await respuesta.json();
  if (respuesta.ok) {
    const token = datos.token;
    localStorage.setItem('token', token);
    localStorage.setItem('userId', datos.userId);  // Guardar el ID del usuario
    
    
    if (datos.role === 'admin') {
      window.location.href = 'admin.html'; // Redirige al panel de administración
    } else {
      window.location.href = 'principal.html'; // Redirige a la página principal
    }
  } else {
    alert('Error al iniciar sesión');
  }
});
