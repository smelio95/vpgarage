import { Component, OnInit } from '@angular/core';
import { VehiclesComponent } from '../vehicles/vehicles.component';

@Component({
    selector: 'app-employee-space',
    templateUrl: './employee-space.component.html',
    styleUrls: ['./employee-space.component.css'],
    standalone: true,
    imports: [VehiclesComponent]
})
export class EmployeeSpaceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
