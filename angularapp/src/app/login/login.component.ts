import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  formData: FormGroup;

  constructor(private authService : AuthService, private router : Router) { }


  ngOnInit() {
    this.formData = new FormGroup({
       username: new FormControl(""),
       password: new FormControl(""),
    });
  }
  public validateLogin(data:any) {
    this.username = data.username;
    this.password = data.password;
    //var username: string = (document.getElementById('username') as HTMLInputElement).value;
    //var password: string = (document.getElementById('password') as HTMLInputElement).value;
    console.log(this.username + "   " + this.password)
    // if (username == "validUser" && password == "Password1") {
    //     alert('Login successful! Role: admin')
    //     return true;
    // } else {
    //     alert('Invalid username or password.')
    //     return false;
    // }

    this.authService.login(this.username, this.password)
         .subscribe( data => {
            console.log("Is Login Success: " + data);

           if(data) this.router.navigate(['/admin']);
      });

  }
}




// export { validateLogin };

// (global as any).location = {
//   href: "login.html"
// };

