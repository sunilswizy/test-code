document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
 
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
 
    // Simulate login validation
    // if (username === "example" && password === "password")
    const validUser="10731089";
    const validPass="proj@123";
    if (username === validUser && password === validPass)
    {
      alert("Login successful! Role: admin");
    } else {
      alert("Invalid username or password");
    }
  });