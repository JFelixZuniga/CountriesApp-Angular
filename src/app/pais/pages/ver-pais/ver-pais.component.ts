import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [],
})
export class VerPaisComponent implements OnInit {
  pais!: Country[];
  translations!: string[];

  constructor(
    private activateRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    // switchMap recibe el valor del observable anterior (params) y retorna un nuevo observable (getPaisPorCodigo)
    this.activateRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.getPaisPorCodigo(id)),
        tap(console.log)
      )
      .subscribe((pais) => {
        this.pais = pais;
      });
    // this.activateRoute.params.subscribe(({ id }) => {
    //   this.paisService.getPaisPorCodigo(id).subscribe((pais) => {
    //     console.log(pais);
    //   });
    // });
  }
}
