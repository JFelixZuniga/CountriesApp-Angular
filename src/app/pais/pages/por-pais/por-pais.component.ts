import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent {
  termino: string = '';
  mensajeError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) {}

  buscar(termino: string) {
    this.mensajeError = false;
    this.termino = termino;

    this.paisService.buscarPais(this.termino).subscribe(
      (paises) => {
        console.log(paises);
        this.paises = paises;
      },
      (error) => {
        this.mensajeError = true;
        this.paises = [];
      }
    );
  }
}
