import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http:HttpClient) {}

  getWeather(location){
    return this.http.get(
      'http://api.weatherstack.com/current?access_key=246ec60b56384ddbe69d879ee2dcfb52&query=' + location
    );
  }
}
