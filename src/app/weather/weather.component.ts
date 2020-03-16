import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApixuService } from '../apixu.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  public weatherSearchForm: FormGroup;
  public weatherData : any;

  constructor(private formBuilder: FormBuilder, private apixuService: ApixuService) { }

  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      location : ['']
    });

  }

  sendToAPIXU(formValues){
    // For testing whether the method is working or not. Open console, enter a location and submit. Check in Console by //clicking inspect page
    // console.log("Works");
    // console.log(formValues);
    this.apixuService
      .getWeather(formValues.location)
      //.subscribe(data => console.log(data)); To check in console
      .subscribe(data => this.weatherData = data)
        console.log(this.weatherData);

  }

}
