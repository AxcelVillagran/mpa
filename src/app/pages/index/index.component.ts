import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatosComponent } from '../datos/datos.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, DatosComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

}
