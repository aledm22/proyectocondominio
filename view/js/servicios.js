document.addEventListener('DOMContentLoaded', () => {
    const darkModeButton = document.getElementById('dark-mode-toggle');
    darkModeButton.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });
  
    const parkingForm = document.getElementById('parkingForm');
    const hallForm = document.getElementById('hallForm');
  
    // Event listener for Parking Form
    parkingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const parkingRequest = document.getElementById('parkingRequest').value;
      if (parkingRequest === 'yes') {
        alert('Has solicitado un puesto de estacionamiento adicional por $5 mensual, el monto se sumara a su recibo del mes');
        // Logic to add the charge to the user's monthly bill
        const formData = {
          service: 'parking',
          amount: 5
        };
  
        fetch('http://localhost:3016/api/parking', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            alert('Solicitud enviada exitosamente');
          } else {
            alert('Error al enviar la solicitud');
          }
        });
      } else {
        alert('No has solicitado un puesto de estacionamiento adicional.');
      }
    });
  
    // Event listener for Hall Form
    hallForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const hallRequest = document.getElementById('hallRequest').value;
      const hallDate = document.getElementById('hallDate').value;
      
      if (hallRequest === 'yes') {
        alert(`Has solicitado alquilar el salón de fiesta por $50 para la fecha ${hallDate}. el monto se sumara a su recibo del mes`);
        // Logic to add the charge to the user's bill
        const formData = {
          service: 'hall',
          amount: 50,
          date: hallDate
        };
  
        fetch('http://localhost:3016/api/hall', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            alert('Solicitud enviada exitosamente');
          } else {
            alert('Error al enviar la solicitud');
          }
        });
      } else {
        alert('No has solicitado alquilar el salón de fiesta.');
      }
    });
  
    // Fetch reserved dates for the hall
    fetch('http://localhost:3016/api/hall/reserved-dates')
      .then(response => response.json())
      .then(dates => {
        const hallDateInput = document.getElementById('hallDate');
        dates.forEach(date => {
          hallDateInput.querySelector(`option[value="${date}"]`).disabled = true;
        });
      });
  });
  