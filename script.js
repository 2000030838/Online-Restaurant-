// Table Booking Functionality
document.getElementById('bookingForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;
  
    const bookingDetails = `
      <div class="alert alert-success">
        <h4>Booking Confirmed!</h4>
        <p>Date: ${date}</p>
        <p>Time: ${time}</p>
        <p>Guests: ${guests}</p>
      </div>
    `;
  
    document.getElementById('bookingDetails').innerHTML = bookingDetails;
  });