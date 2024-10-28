/*const approveButtons = document.querySelectorAll('.approve-button');
const paymentForms = document.querySelectorAll('.payment-form');

approveButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (!button.classList.contains('disabled')) {
      paymentForms[index].style.display = 'block';
    }
  });
});

paymentForms.forEach((form, index) => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const paymentData = {
      username: 'username_placeholder', // Aquí puedes agregar la lógica para obtener el usuario actual
      month: form.closest('.module').querySelector('h3').textContent,
      phone: form.querySelector('.phone').value,
      bank: form.querySelector('.bank').value,
      paymentMethod: form.querySelector('.payment-method').value,
      amount: parseFloat(form.querySelector('.amount').value),
      reference: form.querySelector('.reference').value,
      paymentDate: new Date(form.querySelector('.payment-date').value),
    };

    const response = await fetch('http://localhost:3016/api/payments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(paymentData)
    });

    const data = await response.json();

    if (response.ok) {
      const amount = form.querySelector('.amount').value;
      const paymentMethod = form.querySelector('.payment-method').value;
      const paymentDate = form.querySelector('.payment-date').value;
      
      const parent = form.parentNode.parentNode;
      const moduleContent = parent.querySelector('.module-content');
      
      let amountText = amount;
      if (paymentMethod === 'efectivo') {
        amountText += ' $';
      } else if (paymentMethod === 'pago-movil') {
        amountText += ' Bs';
      }
      moduleContent.innerHTML = `
        <p>Método de pago: ${paymentMethod}</p>
        <p>Monto: ${amountText}</p>
        <p>Fecha de pago: ${paymentDate}</p>
      `;

      const approveButton = parent.querySelector('.approve-button');
      approveButton.textContent = 'EN REVISIÓN';
      approveButton.style.backgroundColor = 'yellow';
      approveButton.style.color = 'black';
      approveButton.classList.add('disabled');
      
      form.style.display = 'none';
      form.reset();

      alert('Pago registrado exitosamente');
    } else {
      alert('Error al registrar el pago');
    }
  });
});

paymentForms.forEach((form, index) => {
  const closeButton = form.querySelector('.close-button');
  closeButton.addEventListener('click', () => {
    form.style.display = 'none';
    form.reset();
  });
});

const darkModeButton = document.getElementById('dark-mode-toggle');
darkModeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    darkModeButton.textContent = 'Light'; // Cambiar a modo claro
  } else {
    darkModeButton.textContent = 'Dark'; // Cambiar a modo oscuro
  }
});

const { pyDolarVenezuela } = require("consulta-dolar-venezuela");
const pyDolar = new pyDolarVenezuela('bcv');

// Retrieve the dollar values
pyDolar.getAllMonitors().then((monitors) => {
  const dollarValue = monitors.find((monitor) => monitor.code === 'USD').value;
  document.getElementById('dollar-value').innerHTML = `USD ${dollarValue}`;
});
*/


/*const approveButtons = document.querySelectorAll('.approve-button');
const paymentForms = document.querySelectorAll('.payment-form');

approveButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (!button.classList.contains('disabled')) {
      paymentForms[index].style.display = 'block';
    }
  });
});

paymentForms.forEach((form, index) => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const userId = 'USER_ID_ACTUAL'; // Aquí debes obtener el ID del usuario actual

    const paymentData = {
      user: userId, // Asegúrate de pasar el ObjectId del usuario aquí
      month: form.closest('.module').querySelector('h3').textContent,
      phone: form.querySelector('.phone').value,
      bank: form.querySelector('.bank').value,
      paymentMethod: form.querySelector('.payment-method').value,
      amount: parseFloat(form.querySelector('.amount').value),
      reference: form.querySelector('.reference').value,
      paymentDate: new Date(form.querySelector('.payment-date').value)
    };

    const response = await fetch('http://localhost:3016/api/payments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(paymentData)
    });

    const data = await response.json();

    if (response.ok) {
      const amount = form.querySelector('.amount').value;
      const paymentMethod = form.querySelector('.payment-method').value;
      const paymentDate = form.querySelector('.payment-date').value;
      
      const parent = form.parentNode.parentNode;
      const moduleContent = parent.querySelector('.module-content');
      
      let amountText = amount;
      if (paymentMethod === 'efectivo') {
        amountText += ' $';
      } else if (paymentMethod === 'pago-movil') {
        amountText += ' Bs';
      }
      moduleContent.innerHTML = `
        <p>Método de pago: ${paymentMethod}</p>
        <p>Monto: ${amountText}</p>
        <p>Fecha de pago: ${paymentDate}</p>
      `;

      const approveButton = parent.querySelector('.approve-button');
      approveButton.textContent = 'EN REVISIÓN';
      approveButton.style.backgroundColor = 'yellow';
      approveButton.style.color = 'black';
      approveButton.classList.add('disabled');
      
      form.style.display = 'none';
      form.reset();

      alert('Pago registrado exitosamente');
    } else {
      alert('Error al registrar el pago');
    }
  });
}); */document.addEventListener('DOMContentLoaded', async () => {
  const modules = document.querySelectorAll('.module-card, .module-card1, .module-card2, .module-card3, .module-card4, .module-card5');
  
  modules.forEach((module) => {
    const approveButton = module.querySelector('.approve-button');
    const paymentForm = module.querySelector('.payment-form');
    
    approveButton.addEventListener('click', () => {
      if (!approveButton.classList.contains('disabled')) {
        paymentForm.style.display = 'block';
      }
    });

    paymentForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const paymentData = {
        month: module.querySelector('h3').textContent,
        phone: paymentForm.querySelector('.phone').value,
        bank: paymentForm.querySelector('.bank').value,
        paymentMethod: paymentForm.querySelector('.payment-method').value,
        amount: parseFloat(paymentForm.querySelector('.amount').value),
        reference: paymentForm.querySelector('.reference').value,
        paymentDate: new Date(paymentForm.querySelector('.payment-date').value),
      };

      const response = await fetch('http://localhost:3016/payments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(paymentData)
      });

      if (response.ok) {
        const amount = paymentForm.querySelector('.amount').value;
        const paymentMethod = paymentForm.querySelector('.payment-method').value;
        const paymentDate = paymentForm.querySelector('.payment-date').value;
        
        const moduleContent = module.querySelector('.module-content');
        let amountText = amount;

        if (paymentMethod === 'efectivo') {
          amountText += ' $';
        } else if (paymentMethod === 'pago-movil') {
          amountText += ' Bs';
        }

        moduleContent.innerHTML = `
          <p>Método de pago: ${paymentMethod}</p>
          <p>Monto: ${amountText}</p>
          <p>Fecha de pago: ${paymentDate}</p>
        `;

        approveButton.textContent = 'EN REVISIÓN';
        approveButton.style.backgroundColor = 'yellow';
        approveButton.style.color = 'black';
        approveButton.classList.add('disabled');

        paymentForm.style.display = 'none';
        paymentForm.reset();

        alert('Pago registrado exitosamente');
      } else {
        alert('Error al registrar el pago');
      }
    });

    const closeButton = paymentForm.querySelector('.close-button');
    closeButton.addEventListener('click', () => {
      paymentForm.style.display = 'none';
      paymentForm.reset();
    });
  });

  const darkModeButton = document.getElementById('dark-mode-toggle');
  darkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeButton.textContent = document.body.classList.contains('dark-mode') ? 'Light' : 'Dark';
  });

  const { pyDolarVenezuela } = require("consulta-dolar-venezuela");
  const pyDolar = new pyDolarVenezuela('bcv');

  // Retrieve the dollar values
  pyDolar.getAllMonitors().then((monitors) => {
    const dollarValue = monitors.find((monitor) => monitor.code === 'USD').value;
    document.getElementById('dollar-value').innerHTML = `USD ${dollarValue}`;
  });
});
