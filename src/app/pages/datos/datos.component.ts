import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from  '@angular/common/http';
import {Root} from '../../interfaces/interfaz-generada';
import {ProveedorService } from '../../providers/proveedor.service'


@Component({
  selector: 'app-datos',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [ProveedorService],
  templateUrl: './datos.component.html',
  styleUrl: './datos.component.css'
})
export class DatosComponent {
  public data : Root[] = [];
  constructor(private dataProvider: ProveedorService) { }
  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => { 
      let dataArray = (response as Root[]); 
      this.data = dataArray.slice(0,10);
    })
  }
}
