import { Component, OnInit, OnChanges, SimpleChanges, EventEmitter ,Input,Output} from "@angular/core";
import { Auto } from "../datos/auto";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { AutosService } from "../../shared/autos.service";


@Component({
  selector: "lista-autos",
  templateUrl: "./lista-autos.component.html",
})


export class ListaAutosComponent implements OnInit {
  faStar = faStar;
  startsList = [];

  tituloListaAutos: string = "Lista de Automóviles";
  listaAutos: Auto[] = [];
  listaAutosFiltrados: Auto[] = [];
  imageWidth = 200;
  imageMargin = 2;
  muestraImagen: boolean = false;


  private _filtro: string = "";
  get filtro(): string {
    return this._filtro;
  }

  set filtro(filtro: string) {
    this._filtro = filtro;
    console.log(this._filtro);
    this.filtraAutos(this._filtro);
  }

  filtraAutos(filtrarPor: string): void {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    this.listaAutosFiltrados = this.listaAutos.filter(
      (auto: Auto) => auto.marca.toLocaleLowerCase().includes(filtrarPor)
    )
  }

  constructor(private _autosService: AutosService) { };

  ngOnInit(): void {
    this.listaAutos = this._autosService.obtenListaAutos();
    this.listaAutosFiltrados = this.listaAutos;
  }

  muestraImagenes(): void {
    //this.filtro = "4";
    //let otraVariable = this.filtro;
    this.muestraImagen = !this.muestraImagen;
  }

  onClickCalificacion(mensaje: string): void {
    alert("Dieron click en la calificacion: " + mensaje);
  }
} 
