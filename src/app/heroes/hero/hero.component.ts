import { Component } from '@angular/core';

@Component({
  // app-heroes-list
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizeName(): string {
    //get PROPIEDADES
    return this.name.toUpperCase();
  }

  // METODO!!! Los demas como capitalizeName son PROPIEDADES
  public getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Spiderman';
  }

  changeAge():void {
     (this.age = 25);
  }

  resetForm():void{
    this.name = 'ironman';
    this.age = 45;
  }
}
