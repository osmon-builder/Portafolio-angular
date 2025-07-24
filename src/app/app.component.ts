import { Component, signal } from '@angular/core';
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from './shared/footer/footer';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [HeaderComponent, FooterComponent, PortafolioComponent]
})
export class AppComponent {
  protected readonly title = signal('portafolio2');
}

