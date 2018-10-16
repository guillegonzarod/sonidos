// 4.1. Creamos la interfaz para los animales:
export interface Animal {
    // 4.2. Creamos las propiedades de la interfaz:
    nombre: string;
    imagen: string;
    audio: string;
    duracion: number;
    reproduciendo: boolean;
}
// 5. Vamos al archivo 'src/pages/home/home.ts':