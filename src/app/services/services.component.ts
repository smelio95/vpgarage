import { Component, OnInit } from '@angular/core';
import { MecaniqueComponent } from './mecanique/mecanique.component';
import { EntretienComponent } from './entretien/entretien.component';
import { CarrosserieComponent } from './carrosserie/carrosserie.component';

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.css'],
    standalone: true,
    imports: [CarrosserieComponent, EntretienComponent, MecaniqueComponent]
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
