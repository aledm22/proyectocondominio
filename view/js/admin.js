// Cargar usuarios
/*async function loadUsers() {
    const response = await fetch('/api/users');
    const users = await response.json();
    const tbody = document.querySelector('#usersTable tbody');
    tbody.innerHTML = '';
    users.forEach(user => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>
          <button onclick="viewPayments('${user.username}')">Ver Pagos</button>
          <button onclick="deleteUser('${user.id}')">Eliminar</button>
        </td>
      `;
      tbody.appendChild(tr);
    });
  }
 

  async function loadUsers() {
    try {
      const response = await fetch('/api/users');
      if (!response.ok) {
        throw new Error('Error al obtener los usuarios');
      }
      const users = await response.json();
      const tbody = document.querySelector('#usersTable tbody');
      tbody.innerHTML = '';
      users.forEach(user => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${user.username}</td>
          <td>${user.email}</td>
          <td>
            <button onclick="viewPayments('${user.username}')">Ver Pagos</button>
            <button onclick="deleteUser('${user.id}')">Eliminar</button>
          </td>
        `;
        tbody.appendChild(tr);
      });
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Ver pagos del usuario
  function viewPayments(username) {
    window.location.href = `/view/user-payments.html?username=${username}`;
  }
  
  // Eliminar usuario
  async function deleteUser(userId) {
    if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
      const response = await fetch(`/api/users/${userId}`, { method: 'DELETE' });
      if (response.ok) {
        alert('Usuario eliminado');
        loadUsers();
      } else {
        alert('Error al eliminar el usuario');
      }
    }
  }
  
  // Cargar pagos del usuario
  async function loadUserPayments(username) {
    document.getElementById('username').textContent = username;
    const response = await fetch(`/api/payments?username=${username}`);
    const payments = await response.json();
    const tbody = document.querySelector('#paymentsTable tbody');
    tbody.innerHTML = '';
    payments.forEach(payment => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${payment.month}</td>
        <td>${payment.phone}</td>
        <td>${payment.bank}</td>
        <td>${payment.paymentMethod}</td>
        <td>${payment.amount}</td>
        <td>${payment.reference}</td>
        <td>${new Date(payment.paymentDate).toLocaleDateString()}</td>
        <td>${payment.status}</td>
      `;
      tbody.appendChild(tr);
    });
  }
  
  // Inicializar
  if (window.location.pathname.endsWith('/view/admin.html')) {
    loadUsers();
  } else if (window.location.pathname.endsWith('/view/user-payments.html')) {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
    loadUserPayments(username);
  }
   */
/*
  async function loadUsers() {
    try {
      const token = localStorage.getItem('token'); // Assumes token is stored in local storage
      const response = await fetch('/api/users', {
        headers: {
          'Authorization': `Bearer ${token}` // Send the token with the request
        }
      });
      if (!response.ok) {
        throw new Error('Error al obtener los usuarios');
      }
      const users = await response.json();
      const tbody = document.querySelector('#usersTable tbody');
      tbody.innerHTML = '';
      users.forEach(user => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${user.username}</td>
          <td>${user.email}</td>
          <td>
            <button onclick="viewPayments('${user.username}')">Ver Pagos</button>
            <button onclick="deleteUser('${user._id}')">Eliminar</button>
          </td>
        `;
        tbody.appendChild(tr);
      });
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  function viewPayments(username) {
    window.location.href = `/view/user-payments.html?username=${username}`;
  }
  
  async function deleteUser(userId) {
    const token = localStorage.getItem('token'); // Use the token here as well
    if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
      const response = await fetch(`/api/users/${userId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}` // Send the token with the request
        }
      });
      if (response.ok) {
        alert('Usuario eliminado');
        loadUsers();
      } else {
        alert('Error al eliminar el usuario');
      }
    }
  }
  
  async function loadUserPayments(username) {
    const token = localStorage.getItem('token'); // Use the token here as well
    document.getElementById('username').textContent = username;
    const response = await fetch(`/api/payments?username=${username}`, {
      headers: {
        'Authorization': `Bearer ${token}` // Send the token with the request
      }
    });
    const payments = await response.json();
    const tbody = document.querySelector('#paymentsTable tbody');
    tbody.innerHTML = '';
    payments.forEach(payment => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${payment.month}</td>
        <td>${payment.phone}</td>
        <td>${payment.bank}</td>
        <td>${payment.paymentMethod}</td>
        <td>${payment.amount}</td>
        <td>${payment.reference}</td>
        <td>${new Date(payment.paymentDate).toLocaleDateString()}</td>
        <td>${payment.status}</td>
      `;
      tbody.appendChild(tr);
    });
  }
  
  if (window.location.pathname.endsWith('/admin.html')) {
    loadUsers();
  } else if (window.location.pathname.endsWith('/user-payments.html')) {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
    loadUserPayments(username);
  }
  */

  const adminSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    role: { type: String, default: 'admin' }
  });
  
  const Admin = mongoose.model('Admin', adminSchema);

  document.addEventListener('DOMContentLoaded', async () => {
    const usersTableBody = document.querySelector('#usersTable tbody');
  
    try {
      const response = await fetch('http://localhost:3016/api/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
          
        }
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
  
      const users = await response.json();
  
      users.forEach(user => {
        const tr = document.createElement('tr');
        
        const usernameTd = document.createElement('td');
        usernameTd.textContent = user.username;
        tr.appendChild(usernameTd);
        
        const emailTd = document.createElement('td');
        emailTd.textContent = user.email;
        tr.appendChild(emailTd);
        
        const actionsTd = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.addEventListener('click', async () => {
          const deleteResponse = await fetch(`http://localhost:3016/api/users/${user._id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
          });
  
          if (deleteResponse.ok) {
            tr.remove();
          } else {
            alert('Error al eliminar el usuario');
          }
        });
  
        actionsTd.appendChild(deleteButton);
        tr.appendChild(actionsTd);
  
        usersTableBody.appendChild(tr);
      });
  
    } catch (error) {
      console.error('Error:', error);
    }
  });
  