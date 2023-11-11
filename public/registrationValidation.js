document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();
 
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const role = document.getElementById('role').value;
 
    // Password validation
    if (password.length < 8 || !/\d/.test(password) || password !== confirmPassword) {
      alert("Password must be at least 8 characters long and contain both letters and numbers. Passwords do not match.");
      return;
    }
 
    // Registration successful
    alert("Registration successful");
    window.location.href = "login.html"; // Navigate to login page
  });