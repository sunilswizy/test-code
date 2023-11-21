import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
   providedIn: 'root'
})
export class AuthService {

  isUserLoggedIn: boolean = false;

   login(userName: string, password: string): Observable<Object> {
      console.log(userName);
      console.log(password);
      this.isUserLoggedIn = userName == 'admin' && password == 'admin123';
      localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false");

   return of(this.isUserLoggedIn).pipe(
      delay(1000),
      tap(val => {
         console.log("Is User Authentication is successful: " + val);
      })
   );

  }

  register(username: string, password: string, role: string): Observable<Object>
  {
    return of(this.isUserLoggedIn).pipe(
      delay(1000),
      tap(val => {
         console.log("Is User Authentication is successful: " + val);
      })
   );
  }

  logout(): void {
  this.isUserLoggedIn = false;
     localStorage.removeItem('isUserLoggedIn');
  }

  constructor() { }



}
