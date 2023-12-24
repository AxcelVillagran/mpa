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
      this.games = dataArray.slice(0,999);
    })
    this.loadNameSelector();
    this.loadPlatform();
  }

  filtrarPorNombre = async(event: Event): Promise<void> =>{
    let juego: string = (event.target as HTMLInputElement).value;
    let trJuegos = document.getElementsByClassName("filaJuego");
    if (juego != null){
      if((juego)!=""){
        for (var i = 0; i < trJuegos.length; i++) {
          let nombreJuego=trJuegos[i].getElementsByClassName("nombre-juego")[0].innerHTML
          if(nombreJuego.slice(1,nombreJuego.length).startsWith(juego)){
            trJuegos[i].classList.remove("ocultar");
          }else{
            trJuegos[i].classList.add("ocultar");
          }
      }
      }else{
        for (var i = 0; i < trJuegos.length; i++) {
          trJuegos[i].classList.remove("ocultar");
        }
      }
    }
  }

  filtrarPlataformas = async(event: Event): Promise<void> =>{
    let selectedPlatform: string = (event.target as HTMLInputElement).value;
    console.log(selectedPlatform);
    //let seleccionado = document.getElementById("plataformaSelect") as HTMLInputElement | null;
    let trJuegos = document.getElementsByClassName("filaJuego");
    if (selectedPlatform != null){
      if((selectedPlatform)!="Todas"){
        for (var i = 0; i < trJuegos.length; i++) {
          let plataformas=trJuegos[i].getElementsByClassName("plataformas")[0].innerHTML
          if(plataformas.includes(selectedPlatform)){
            trJuegos[i].classList.remove("ocultar");
          }else{
            trJuegos[i].classList.add("ocultar");
          }
      
      }
      }else{
        for (var i = 0; i < trJuegos.length; i++) {
          trJuegos[i].classList.remove("ocultar");
        }
      }
    }
  }

  loadPlatform = () => {

    let selectElement: HTMLSelectElement | null = document.querySelector("select")
    if(selectElement!=null){
      selectElement.addEventListener("change", this.filtrarPlataformas)
    }
  }
  
  loadNameSelector = () => {
    let selectElement = document.querySelector("input") as HTMLInputElement | null;
    if(selectElement!=null){
      selectElement.addEventListener("change", this.filtrarPorNombre)
    }
  }
}
