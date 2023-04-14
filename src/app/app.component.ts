import { Component } from '@angular/core';
import { Pokemon } from './models/pokemon';
interface Nav {
  link: string,
  name: string,
  exact: boolean
};


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})



export class AppComponent {
  nav: Nav[] = [
    {
      link: '/',
      name: 'Home',
      exact: true
    },
    {
      link: '/badrequest',
      name: 'BadRequest',
      exact: true
    }
  ];
  // pokemons: Pokemon[] = [
  //   {
  //     id: 1,
  //     name: 'pickachu',
  //     type: 'electric',
  //     isCool: true,
  //   },
  //   {
  //     id: 2,
  //     name: 'charmander',
  //     type: 'fire',
  //     isCool: false,
  //   },
  // ];
  // favoriteAnimal: string;
  // pokemonName: string;
  // constructor() {
  //   this.favoriteAnimal = 'turtle';
  //   this.pokemonName = '';
  // }

  // handleClick(value: any) {
  //   console.log(value);
  // }

  // handleInput(event: any) {
  //   this.pokemonName = event.target.value;
  // }

  clickShit(value: string){
    alert(value);
  }
}
