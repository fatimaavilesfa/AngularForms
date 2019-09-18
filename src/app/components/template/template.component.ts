import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form) {
      border: 1px solid red;
    }
  `]
})
export class TemplateComponent  {

  usuario:Object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: null,
    sex: null,
    acepta: false
  }

  paises = [{
    codigo: 'FR',
    nombre: 'France'
  },
  {
    codigo: 'RU',
    nombre: 'Russia'
  }];

  sexos: string[] = ['female', 'male', 'undefined'];

  constructor() { }


  guardar( forma: NgForm ) {
    console.log(forma, 'ngForm');
    console.log('valor', forma.value );
    console.log('Usuario', this.usuario );
  }

}
