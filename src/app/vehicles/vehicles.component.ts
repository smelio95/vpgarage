import { Component } from '@angular/core';
import { UsedVehiclesComponent } from './used-vehicles/used-vehicles.component';

@Component({
    selector: 'app-vehicles',
    templateUrl: './vehicles.component.html',
    styleUrls: ['./vehicles.component.css'],
    standalone: true,
    imports: [UsedVehiclesComponent]
})
export class VehiclesComponent {

  selectedVehicle: any;

  showVehicleDetails(vehicle: any): void {
    this.selectedVehicle = vehicle;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
