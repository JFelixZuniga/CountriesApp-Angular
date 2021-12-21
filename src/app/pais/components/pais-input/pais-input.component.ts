import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [],
})
export class PaisInputComponent {
  // vamos a emitir un evento, el cual será de tipo string (termino)
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  termino: string = '';

  buscar() {
    this.onEnter.emit(this.termino);
  }
}
