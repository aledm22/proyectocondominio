const formulario = document.querySelector('#registerForm');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

formulario.addEventListener('submit', async (event) => {
  event.preventDefault();
  const user = { username: username.value, email: email.value, password: password.value };

  const response = await fetch('http://localhost:3016/api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });

  const data = await response.json();
  if (response.ok) {
    alert('Registro exitoso!');
    window.location.href = 'login.html'; // Redirige al login
  } else {
    alert('Error al registrar');
  }
});



/*const formulario = document.querySelector('#registerForm');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const registerButton = document.querySelector('#registerButton');


formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    try {
        const newUser = {
            name: username.value,
            email: email.value,
            password: password.value    
        }
    } catch (error) {
        console(error);
    }
    const username = username.value;
    const email = email.value;
    const password = password.value;
    console.log(username, email, password);
});

formulario.addEventListener('submit', async e => {
    e.preventDefault();
    await fetch ('http://localhost:3001/registro',{
        method: 'POST', 
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify

    })

    })



/*document.getElementById('registerForm').addEventListener('submit', (event) => {
    event.preventDefault();

   /* const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;  
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
     */

    // Validación básica
   /* if (!username || !email || !password || !confirmPassword) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
        return;
    }

    // Envío de la solicitud al servidor
    fetch('/registro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
    })
    .then(response   => {
        if (!response.ok) {
            return response.json().then(data   => {
                // Manejar errores específicos basados en la respuesta del servidor
                if (data.error === 'username_taken') {
                    alert('El nombre de usuario ya está en uso.');
                } else if (data.error === 'invalid_email') {
                    alert('El correo electrónico no es válido.');
                } else {
                    alert('Error al registrarse: ' + data.message);
                }
            });
        }

        // Manejar respuesta exitosa
        alert('¡Registro exitoso!');
        window.location.href = 'login.html'; // Redirige a la página de inicio de sesión
    })
    .catch(error => {
        console.error('Error de red:', error);
        alert('Error al registrarse. Por favor, inténtalo nuevamente.');
    });
/*});*/