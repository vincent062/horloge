import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HorlogeMondialeComponent } from './horloge-mondiale/horloge-mondiale';
@Component({
  selector: 'app-root',
  standalone: true,
  // 2. Ajoutez-le au tableau 'imports'
  imports: [CommonModule, RouterOutlet, HorlogeMondialeComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'horloge';
}
