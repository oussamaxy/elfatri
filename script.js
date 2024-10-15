// JavaScript for form validation
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    let name = document.querySelector('input[name="name"]').value;
    let email = document.querySelector('input[name="email"]').value;
    let message = document.querySelector('textarea[name="message"]').value;
  
    if (!name || !email || !message) {
      alert('Please fill out all fields.');
      return;
    }
  
    alert('Message sent successfully!');
  });
  