import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-horloge-ville',
  standalone: true,
  imports: [],
  templateUrl: './horloge-ville.html',
  styleUrls: ['./horloge-ville.css']
})
export class HorlogeVilleComponent {
  // Déclare les propriétés qui peuvent être reçues du parent
  @Input() ville: string = '';
  @Input() heure: string = '';
}
