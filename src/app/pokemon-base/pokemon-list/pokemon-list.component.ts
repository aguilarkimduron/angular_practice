import { PokemonService } from './../../service/pokemon.service';
import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { Observable, delay } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit, AfterViewInit{
  pokemons!: Pokemon[];
  pokemonObserver!: Observable<Pokemon[]>;
  @ViewChildren('pokemonDetailRef') pokemonRef!: ElementRef;
  @ViewChild('head') head!: ElementRef;
  @ViewChild('divElement') div!: ElementRef;
  constructor(private pokemonService: PokemonService, private rendered: Renderer2){

  }
  ngAfterViewInit(): void {
    //console.log(this.pokemonRef, this.head.nativeElement.nodeName);
    this.div.nativeElement.innerText = "Hello Bobo";
    const div = this.rendered.createElement('div');
    const text = this.rendered.createText('Tanga');
    this.rendered.appendChild(div, text);
    this.rendered.appendChild(this.div.nativeElement, div);
  }

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe((data: Pokemon[]) => {
      this.pokemons = data;
    });
    this.pokemonObserver = this.pokemonService.getPokemons().pipe(delay(5000));
    //this.pokemons = this.pokemonService.getPokemons();
  }

  handleRemove(event: Pokemon){
    this.pokemons = this.pokemons.filter((pokemon: Pokemon) => pokemon.id != event.id);
  }
}
