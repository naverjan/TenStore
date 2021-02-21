import { Injectable } from '@angular/core';
import { EmisionComponent } from './emision.component';

@Injectable({
  providedIn: 'root'
})
export class EmisionService {

  constructor() { }

  public  add(params:number[]): number{
    let result = 0;
    for(let val of params){
      result += val;
    }
    return result;
    

  }
  public getEmision(nombre: String){
    var emisionT = new  emision(nombre);

    return emisionT.getName();  
    
  }

  
  
}

class emision{
  nombre: String;
  constructor(nombre: String){
    this.nombre = nombre;
  }

  public getName(){
    return this.nombre;
  }
}






