import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private registrationservice:AuthService,private router:Router) {}
  ngOnInit(): void {
  }

  public username: string;
  public password: string;
  public confirmPassword: string;
  public role: string;

  public register(){
    console.log("role id:"+this.role);
    if(this.role == 'ADMIN'){
      this.router.navigate(["/admin"]);
    }else if(this.role == 'ORGANIZER'){
      this.router.navigate(["/organizer"]);
    }else{
      this.router.navigate(["/error"]);
    }
  }
  public validateRegistration() {

    const username: string = (document.getElementById('username') as HTMLInputElement).value;
    const password: string = (document.getElementById('password') as HTMLInputElement).value;
    this.role=(document.getElementById('role') as HTMLInputElement).value;
    //console.log("username is:"+username);
    const confirmPassword: string = (document.getElementById('confirmPassword') as HTMLInputElement).value.trim();

    const passwordValidation: HTMLElement = document.getElementById('passwordValidation');

    if(!this.validatePasswordLength(password) || !this.validateAlphaNumbericExist(password))
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

        if(!this.validatePasswordConfirm(password,confirmPassword)){
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
            this.register();
            return true;
        }

    }
  }

  public validatePasswordLength(password: string): boolean {
    if(password.length < 8)
        return false;
    else
        return true;
  }

  public validateAlphaNumbericExist(password: string): boolean {
    let alpha: boolean = false;
    let digit: boolean = false;
    for(let ch of password){
        if((ch>='A' && ch<='Z') || (ch>='a' && ch<='z'))
            alpha = true;
        else if(ch>='0' && ch<='9')
            digit = true;
    }
    return alpha && digit;
  }

  public validatePasswordConfirm(password: string, confirmPassword: string): boolean {
    if(password == confirmPassword)
        return true;
    else
        return false;
  }
}

