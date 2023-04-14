import { PokemonService } from '../../service/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonType } from '../../models/pokemon';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-template-form',
  templateUrl: './pokemon-template-form.component.html',
  styleUrls: ['./pokemon-template-form.component.css']
})
export class PokemonTemplateFormComponent implements OnInit {
  pokemon!: Pokemon;
  pokemonType: PokemonType[] = [
    {
      key: 0,
      value: "electric"
    }
    ,
    {
      key: 1,
      value: "water"
    }
    ,
    {
      key: 2,
      value: "fire"
    }
    ,
    {
      key: 3,
      value: "grass"
    }
    ,
    {
      key: 4,
      value: "ice"
    }
  ];
  id!: number;
  constructor(private readonly _pokemonService: PokemonService, private readonly router: Router, private readonly route: ActivatedRoute){

  }

  toggleChange(value: string){
    // console.log(value);
  }
  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this._pokemonService.getPokemon(parseInt(param["id"])).subscribe((pokemon: Pokemon) => {
        this.pokemon = pokemon;
      })
    });
    console.log("PokemonTemplateFormComponent is loaded!");
  }

  onSubmit(form: NgForm){
    console.log(form.value);
  }
  back(): void{
    this.router.navigate(['/pokemon']);
  }

}
