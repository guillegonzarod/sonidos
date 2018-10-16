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

  // 6.2. Codificamos la función 'reproducir(animal: Animal)' que actuará al hacer 'click' en un item:
  reproducir(animal: Animal) {
    console.log(animal);
    // 6.3. Instanciamos un objeto tipo 'Audio' (forma parte de HTML5) para reproducir los sonidos:
    let audio = new Audio();
    // 6.4. Le asignamos la fuente del audio (*.mp3 o *.wav):
    audio.src = animal.audio;
    // 6.5. Ponemos la propiedad 'reproduciendo' del animal a true:
    animal.reproduciendo = true;
    // 6.6. Cargamos el audio y lo empezamos a reproducir: 
    audio.load();
    audio.play();
    // 6.7. Codificamos un 'Timer()' para que, transcurrido el tiempo determinado por la propiedad 'duracion',
    // en milisegundos, el valor de la propiedad 'reproduciendo' cambie a 'false':
    setTimeout(() => {
      animal.reproduciendo = false;
    }, animal.duracion * 1000);
  }
  // 6.8. Vamos al achivo 'src/pages/home/home.html':
}
