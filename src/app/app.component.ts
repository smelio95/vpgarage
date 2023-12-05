import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FooterComponent } from './footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [HeaderComponent, RouterOutlet, FooterComponent]
})
export class AppComponent implements OnInit {
  title = 'Vincent Parraut';
  helloMessage: Observable<any> | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
