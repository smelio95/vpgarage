import { Component, OnInit } from '@angular/core';
import { TestimonialComponent } from '../testimonial/testimonial.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: true,
    imports: [TestimonialComponent]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
