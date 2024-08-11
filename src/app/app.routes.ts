import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DeptComponent } from './pages/dept/dept.component';
import { ServiceComponent } from './pages/service/service.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"aboutus",component:AboutComponent},
    {path:"contactus",component:ContactComponent},
    {path:"department",component:DeptComponent},
    {path:"services",component:ServiceComponent}
];