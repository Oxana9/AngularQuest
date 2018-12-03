import { Component, OnInit, Input } from '@angular/core';
import { MapGeoObject } from './map.models';
import {MapOptions} from 'angular2-yandex-maps';

declare var ymaps:any;

//  interface objectOptions{
//	  [key: string]: any;
//  }

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  public map :any;


	@Input() geoObject: Array<MapGeoObject>;//Array<objectOptions>;
	@Input() mapOption: MapOptions;//objectOptions;
//	@Input() testParam:any;
//	  console.log("geoObject",geoObject);
//	  console.log("mapOption",mapOption);
 // geoObject = this.geoObject;
  //balloonContent = this.balloonContent;
  //coordinates = this.coordinates;

//  public geoObject : any = this.geoObject1;
//  public mapOption : any = this.mapOption1;

  constructor() {
//	  console.log("geoObject",this.geoObject1);
//	  console.log("mapOption",this.mapOption1);
//	  console.log("testParam",this.testParam);

	}

  ngOnInit() {
	  //console.log("geoObject",this.geoObject);
	  //console.log("mapOption",this.mapOption);
	  //console.log("testParam",this.testParam);


		  ymaps.ready().then(() => {
      this.map = new ymaps.Map('map', {
        center: this.mapOption.center,
        zoom: this.mapOption.zoom
      });

	  const createObject = function(mapObject, geoObjects: Array<MapGeoObject>){
      geoObjects.forEach (function (geoObj: MapGeoObject) {
			  mapObject.geoObjects.add(

			  new ymaps.Placemark(geoObj.coordinates, {
            balloonContent: geoObj.balloonContent
        }, {
            preset: geoObj.preset,
            /*iconColor: geoObj.iconColor,*/
			iconLayout: geoObj.iconLayout,
			iconImageHref: geoObj.iconImageHref,
			iconImageSize: [50, 50],
			iconImageOffset: [-1, -1]
        })

			  );
		  });
	  }

    createObject(this.map, this.geoObject);

  });
}}
