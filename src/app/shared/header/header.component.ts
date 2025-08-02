import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css'], // ✅ aquí lo agregas
  imports: [RouterModule]
})
export class HeaderComponent {}

