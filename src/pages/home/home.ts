import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// 3. Importamos la constante 'ANIMALES' del archivo 'src/datos/data.animales.ts':
import { ANIMALES } from '../../datos/data.animales'
// 5.1. Importamos la interfaz 'Animal':
import { Animal } from '../../interfaces/animal.interface'
import { analyzeAndValidateNgModules } from '@angular/compiler';
// 9.2. Importamos la clase 'Refresher':
import { Refresher } from 'ionic-angular';
// 10.3. Importamos la función 'reorderArray':
import { reorderArray } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // 3.1. Declaramos una propiedad tipo 'any[]' para asignarle el array de ANIMALES:
  // 5.2. Le cambiamos el tipo de dato de 'any' a la interfaz 'Animal':
  animales: Animal[] = [];
  // 5.3 Vamos al archivo 'src/pages/home/home.html':
  // 7.1. Instanciamos un solo objeto tipo 'Audio' para no crear un objeto cada vez que llamemos al 
  // método 'reproducir(animal: Animal)':
  audio: HTMLAudioElement = new Audio();
  // 7.2. Instanciamos un objeto tipo 'number' para no crear un 'Timer()' cada vez que llamemos al 
  // método 'reproducir(animal: Animal)':
  audioTiempo: number;
  // 10.5. Creamos una propiedad tipo 'boolean' para controlar que solo se muestre el botón de ordenar
  // cuando se quiera ordenar la lista:
  // 10.6. Vamos al archivo 'src/pages/home/home.html':
  ordenando: boolean = false;

  constructor() {
    // 3.2. Le asignamos a la propiedad 'animales' una copia exacta del array de la constante 'ANIMALES':
    this.animales = ANIMALES.slice(0);
    // 4. Creamos la carpeta 'src/interfaces' y dentro de ella añadimos el archivo 'animal.interface.ts'. 
    // Vamos al archivo 'src/interfaces/animal.interface.ts':
  }

  // 6.2. Codificamos la función 'reproducir(animal: Animal)' que actuará al hacer 'click' en un item:
  reproducir(animal: Animal) {
    // 7.5. Invocamos a la función 'pausar_audio()':
    this.pausar_audio(animal);

    // 7.6.: Le asignamos 'false' a la propiedad 'reproduciendo' del animal pasado como parámetro:
    if (animal.reproduciendo) {
      animal.reproduciendo = false;
      // 7.6.1. Salimos de la funcion:
      return;
    }
    // 8. Vamos al archivo 'src/pages/home/home.html':
    console.log(animal);
    // 6.3. Instanciamos un objeto tipo 'Audio' (forma parte de HTML5) para reproducir los sonidos:
    // let audio = new Audio();
    // 6.4. Le asignamos la fuente del audio (*.mp3 o *.wav):
    // audio.src = animal.audio;
    this.audio.src = animal.audio;
    // 6.5. Ponemos la propiedad 'reproduciendo' del animal a true:
    animal.reproduciendo = true;
    // 6.6. Cargamos el audio y lo empezamos a reproducir: 
    // audio.load();
    // audio.play();
    this.audio.load();
    this.audio.play();
    // 6.7. Codificamos un 'Timer()' para que, transcurrido el tiempo determinado por la propiedad 'duracion',
    // en milisegundos, el valor de la propiedad 'reproduciendo' cambie a 'false':
    // 7.3. Le asignamos el 'Timer()' a la propiedad 'audioTiempo':
    this.audioTiempo = setTimeout(() => {
      animal.reproduciendo = false;
    }, animal.duracion * 1000);
  }
  // 6.8. Vamos al achivo 'src/pages/home/home.html':

  // 7.4. Codificamos un método 'privado' para parar el 'Timer()', reiniciar el 'audio' y hacer que 
  // solo suene el 'animal' pasado como parámetro a la función:
  private pausar_audio(animalSeleccionado: Animal) {
    // 7.4.1. Evitamos que se ejecute el Timer():
    clearTimeout(this.audioTiempo);
    // 7.4.2. Pausamos la reproducción de la propiedad 'audio':
    this.audio.pause();
    // 7.4.3. Reiniciamos la reproducción de la propiedad 'audio':
    this.audio.currentTime = 0;
    // 7.4.4. Recorremos la propiedad 'animales' para parar todas las reproducciones excepto la del 
    // 'animal' pasado como parámetro a la función:
    for (let animal of this.animales) {
      if (animal.nombre != animalSeleccionado.nombre) {
        animal.reproduciendo = false;
      }
    }
  }
  // 8.4. Codificamos el método para eliminar un item (mediante su índice pasado como parámetro) 
  // de la lista de animales:
  borrar_animal(indice: number) {
    // 8.4.1. Eliminamos el elemento correspondiente del array 'animales':
    this.animales.splice(indice, 1);
  }
  // 9. Vamos al achivo 'src/pages/home/home.html':
  // 9.3. Codificamos el método que va a reiniciar el contenido del array de animales:
  // 9.3.1. Debemos pasarle a la función un parámetro tipo 'Refresher':
  recargar_animales(refresher: Refresher) {
    console.log('Iniciamos el refresh');
    // 9.3.2. Añadimos un 'Timer()' para que tarde un tiempo en ejecutarse, ya que sino, no
    // daría casi tiempo a ver el refresco:
    setTimeout(() => {
      // 9.3.3. Recargamos el array de animales:
      this.animales = ANIMALES.slice(0);
      // 9.3.4. Terminamos la ejecución del refresco:
      console.log('Terminó el refresh');
      refresher.complete();
    }, 1500);
  }
  // 10. Vamos al achivo 'src/pages/home/home.html':
  // 10.4. Codificamos el método que actuará cuando se reordene la lista:
  reordenar_animales(indices: any) {
    console.log(indices);
    // 10.4.1. Utilizamos el método 'reorderArray()' para reodernar el array:
    this.animales = reorderArray(this.animales, indices);
  }
}
