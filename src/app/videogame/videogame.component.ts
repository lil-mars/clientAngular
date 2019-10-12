import {Component} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'videogames',
  template: `
    <h2>Componente {{ name }}</h2>
  `
})
export class VideogameComponent {
  public name = 'Videojuegos 2018';
  public bestGame = 'God of War III';
}
