import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { OrganizerComponent } from './organizer/organizer.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ErrorComponent } from './error/error.component';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"admin",component:AdminComponent},
    {path:"organizer",component:OrganizerComponent},
    {path:"login",component:LoginComponent},
    {path:"register",component:RegistrationComponent},
    {path:"error",component:ErrorComponent},
    {path:"**",redirectTo:"/error",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
