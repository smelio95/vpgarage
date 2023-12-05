import { Component, OnInit, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-vehicles-details',
    templateUrl: './vehicles-details.component.html',
    styleUrls: ['./vehicles-details.component.css'],
    standalone: true,
    imports: [NgIf]
})
export class VehiclesDetailsComponent implements OnInit {
  vehicle: any;
  
  @Input() selectedVehicle: any;


  ngOnInit(): void {}

}
