import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  private games: string = 'https://mpaaxcel-default-rtdb.firebaseio.com/collection.json';
  private category: string = ''; //COLOCAR URL DE JSON DE CATEGORIA

  constructor(private http:HttpClient) { }
  getGames() {
    return this.http.get(this.games);
  }
  getCategories(){
    return this.http.get(this.category);
  }
}
