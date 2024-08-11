import { Component } from '@angular/core';
import { ContactComponent } from '../../pages/contact/contact.component';
import { DeptComponent } from '../../pages/dept/dept.component';
import { ServiceComponent } from '../../pages/service/service.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ContactComponent,DeptComponent,ServiceComponent,RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
