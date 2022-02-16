import { Component, OnInit } from '@angular/core';
import { ObjHero} from '../objhero';

@Component({
  selector: 'app-driven-form',
  templateUrl: './driven-form.component.html',
  styleUrls: ['./driven-form.component.css']
})
export class DrivenFormComponent implements OnInit {

  constructor() { }

  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model = new ObjHero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmitted() { this.submitted = true };

  ngOnInit(): void {
  }

}
