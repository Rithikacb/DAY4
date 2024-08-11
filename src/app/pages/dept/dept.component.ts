import { Component } from '@angular/core';
import { CardComponent } from '../../unit/card/card.component';

@Component({
  selector: 'app-dept',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './dept.component.html',
  styleUrl: './dept.component.css'
})
export class DeptComponent {

}
