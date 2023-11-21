function validateRegistration() {

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value.trim();
    var passwordValidation = document.getElementById('passwordValidation');

    if(!validatePasswordLength(password) || !validateAlphaNumbericExist(password))
    {
        passwordValidation.hidden = false;
        passwordValidation.innerHTML = 'Password must be at least 8 characters long and contain both letters and numbers';
        console.log(false);
        console.log(document.getElementById('passwordValidation').textContent)
        console.log("Expected : "+'Password must be at least 8 characters long and contain both letters and numbers');

        return false;
    }else {
        passwordValidation.innerHTML = "";
        passwordValidation.hidden = true;

        if(!validatePasswordConfirm(password,confirmPassword)){
            passwordValidation.hidden = false;
            passwordValidation.innerHTML = 'Passwords do not match';
            console.log(false);
            console.log(document.getElementById('passwordValidation').textContent)
            console.log("Expected : "+'Passwords do not match');
            return false;
        }else {
            passwordValidation.innerHTML = "";
            passwordValidation.hidden = true;
            alert('Registration successful!');
            return true;
        }
    }
};
function validatePasswordLength(password){
    if(password.length < 8)
        return false;
    else
        return true;
}


function validateAlphaNumbericExist(password){
    let alpha = false;
    let digit = false;
    for(ch of password){
        if((ch>='A' && ch<='Z') || (ch>='a' && ch<='z'))
            alpha = true;
        else if(ch>='0' && ch<='9')
            digit = true;
    }
    return alpha && digit;
}

function validatePasswordConfirm(password,confirmPassword){
    if(password == confirmPassword)
        return true;
    else
        return false;
}


exports.validateRegistration = validateRegistration;
// global.location = {
//     href: "home.html"
// };

window.onload = function() {
    console.log(location.href);
}