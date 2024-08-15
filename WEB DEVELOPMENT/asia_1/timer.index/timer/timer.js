document.addEventListener('DOMContentLoaded', function () {
    const countdownForm = document.getElementById('countdownForm');
    const countdownDateInput = document.getElementById('countdownDate');
    const countdownDisplay = document.getElementById('countdown');
  
    countdownForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const countdownDate = new Date(countdownDateInput.value).getTime();
  
      if (isNaN(countdownDate)) {
        alert('Please enter a valid date and time.');
        return;
      }
  
      const updateCountdown = setInterval(function () {
        const now = new Date().getTime();
        const distance = countdownDate - now;
  
        if (distance < 0) {
          clearInterval(updateCountdown);
          countdownDisplay.textContent = 'Countdown expired!';
          return;
        }
  
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
        countdownDisplay.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      }, 1000);
    });
  });