import { Component } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './unit/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './unit/form/form.component';
import { FooterComponent } from './unit/footer/footer.component';
import { CardComponent } from './unit/card/card.component';
import { CarouselComponent } from './unit/carousel/carousel.component';
import { AboutComponent } from './pages/about/about.component';
import { DeptComponent } from './pages/dept/dept.component';
import { ServiceComponent } from './pages/service/service.component';
import { ContactComponent } from './pages/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent,NavbarComponent,RouterOutlet,FormComponent,FooterComponent,CardComponent,CarouselComponent,AboutComponent,DeptComponent,ServiceComponent,ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'testproject';
}
