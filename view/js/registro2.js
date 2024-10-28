




/*document.getElementById('registerForm').addEventListener('submit', async function(event) {  
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario  

    const username = document.getElementById('username').value;  
    const password = document.getElementById('password').value;  

    const response = await fetch('http://localhost:3001/registro', {  
        method: 'POST',  
        headers: {  
            'Content-Type': 'application/json'  
        },  
        body: JSON.stringify({ username, password })  
    });  

    const data = await response.json();  

    if (response.ok) {  
        alert('Usuario creado exitosamente. Ahora puedes iniciar sesión.');  
        window.location.href = 'login.html'; // Redirigir al formulario de login  
    } else {  
        alert(data.message);  
    }  
/*});*/

