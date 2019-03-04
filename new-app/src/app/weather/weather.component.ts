import { Component, OnInit } from '@angular/core';
import { WeatherService } from  '../weather.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  private  contacts:  Array<object> = [];
  constructor(private  apiService:  WeatherService) { }

  ngOnInit() {
    this.getState();
  }
  public  getState(){
    this.apiService.getState().subscribe((data:  Array<object>) => {
        this.contacts  =  data;
        console.log(data);
    });
}
}
