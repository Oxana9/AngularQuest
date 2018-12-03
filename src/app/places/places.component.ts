import { Component, OnInit } from '@angular/core';
import { PLACES } from '../somePlaces';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {
  places = PLACES;
  selectedPlace = null;
  place = {
    name: 'Цирк',
    location: 'Рашпилевская, 147',
    story: '',
    userResponse: ''
  };
  constructor() { }

  ngOnInit() {
  }
  onSelect(place): void {
    console.log(place)
    this.selectedPlace = place;
  }
}