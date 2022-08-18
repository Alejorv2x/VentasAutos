import { Injectable } from '@angular/core';
import { Auto } from '../autos/datos/auto';

@Injectable({
  providedIn: 'root'
})
export class AutosService {
  listaAutos: Auto[] = [];

  public obtenListaAutos(): Auto[] {
    if (this.listaAutos.length == 0) {
      this.listaAutos = this._determinaListaAutos();
    }
    return this.listaAutos;
  }

  public obtenAuto(id: number): Auto {
    if (this.listaAutos.length == 0) {
      this.listaAutos = this._determinaListaAutos();
    }
    return this.listaAutos.find( auto => auto.id == id )!;
  }

  private _determinaListaAutos(): Auto [] {
    let listaAutos = [
      {
        id: 1,
        marca: "Honda",
        modelo: "Z-RV",
        ano: 2020,
        color: "Blanco",
        kilometros: 2000,
        calificacion: 4,
        precio: 150000000,
        imagenUrl: "./assets/imagenAutos/Honda-Zrv.jpg"
      },
      {
        id: 2,
        marca: "Jeep",
        modelo: "Cherokee",
        ano: 2021,
        color: "Gris",
        kilometros: 20000,
        calificacion: 5,
        precio: 170000000,
        imagenUrl: "./assets/imagenAutos/JeepCherokee.jpg"
      },
      {
        id: 3,
        marca: "Mazda",
        modelo: "3",
        ano: 2020,
        color: "Rojo",
        kilometros: 200,
        calificacion: 3,
        precio: 85000000,
        imagenUrl: "./assets/imagenAutos/Mazda3.jpg"
      },
      {
        id: 4,
        marca: "Renault",
        modelo: "Zoe",
        ano: 2022,
        color: "Gris",
        kilometros: 20000,
        calificacion: 2,
        precio: 120000000,
        imagenUrl: "./assets/imagenAutos/RenaultZoe.jpg"
      },
      {
        id: 5,
        marca: "Toyota",
        modelo: "Lexus",
        ano: 2021,
        color: "Blanco",
        kilometros: 30000,
        calificacion: 1,
        precio: 150000000,
        imagenUrl: "./assets/imagenAutos/ToyotaLexus.jpg"
      }
    ];
    return listaAutos;
  }
}
