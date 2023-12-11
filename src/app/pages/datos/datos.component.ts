import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from  '@angular/common/http';
import {Game} from '../../interfaces/game-interface';
import {ProveedorService } from '../../providers/proveedor.service'
import { Category } from '../../interfaces/category-interface';


@Component({
  selector: 'app-datos',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [ProveedorService],
  templateUrl: './datos.component.html',
  styleUrl: './datos.component.css'
})
export class DatosComponent {
  public games : Game[] = [];
  public categories : Category[] = [];
  constructor(private dataProvider: ProveedorService) { }
  ngOnInit() {
    this.dataProvider.getGames().subscribe((response) => { 
      let dataArray = (response as Game[]); 
      this.games = dataArray.slice(0,10);
    })
  }
}
