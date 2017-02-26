import { Component } from '@angular/core';

import { Hero }      from './hero';

@Component({
  moduleId: module.id,
  selector: 'hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: [ './hero-form.component.css' ]
})
export class HeroFormComponent { 
  private powers = ['Really Smart', 'Super Flexible','Super Hot', 'Weather Changer'];
  private model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Street');
  private submitted = false;

  private onSubmit() { this.submitted = true; }

  private newHero(): void {
    console.log('new Hero');
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}