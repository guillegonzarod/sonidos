import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// 3. Importamos la constante 'ANIMALES' del archivo 'src/datos/data.animales.ts':
import { ANIMALES } from '../../datos/data.animales'
// 5.1. Importamos la interfaz 'Animal':
import { Animal } from '../../interfaces/animal.interface'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // 3.1. Declaramos una propiedad tipo 'any[]' para asignarle el array de ANIMALES:
  // 5.2. Le cambiamos el tipo de dato de 'any' a la interfaz 'Animal':
  animales: Animal[] = [];
  // 5.3 Vamos al archivo 'src/pages/home/home.html':

  constructor() {
    // 3.2. Le asignamos a la propiedad 'animales' una copia exacta del array de la constante 'ANIMALES':
    this.animales = ANIMALES.slice(0);
    // 4. Creamos la carpeta 'src/interfaces' y dentro de ella añadimos el archivo 'animal.interface.ts'. 
    // Vamos al archivo 'src/interfaces/animal.interface.ts':
  }

}
