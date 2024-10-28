function redirectWhatsApp(message) {
    const phoneNumber = '+584241587783';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(url, '_blank'); // Opens the URL in a new tab
  }
  