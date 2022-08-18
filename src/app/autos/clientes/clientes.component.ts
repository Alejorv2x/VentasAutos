import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  muestraContactos: boolean = false;
  constructor(private _activatedRoute: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit(): void {
  }

  muestraContacto(): void {
    this.muestraContactos = !this.muestraContactos;
  }

  onRegistrar(): void {
    alert("Se guarda el dato");
  }

  IrInicio(): void {
    this._router.navigate(['/inicio']);
  }
}
