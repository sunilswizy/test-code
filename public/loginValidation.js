function validateLogin(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username+"   "+password)
    if(username == "validUser" && password == "Password1"){
        alert('Login successful! Role: admin')
        return true;
    }else{
        alert('Invalid username or password.')
        return false;
    }
}

exports.validateLogin=validateLogin;


global.location = {
    href: "login.html"
};