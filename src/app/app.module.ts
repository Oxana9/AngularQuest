import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PlacesComponent } from './places/places.component';

import { FormsModule } from '@angular/forms';
import { PlaceDetailComponent } from './place-detail/place-detail.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    PlacesComponent,
    PlaceDetailComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
	BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
