import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  //to ingest data from another component need to define in typescript file be declaring an input property
  @Input() hero? : Hero;


  constructor() { }

  ngOnInit(): void {
  }

}
