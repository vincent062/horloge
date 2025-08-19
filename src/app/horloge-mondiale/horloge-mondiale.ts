import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorlogeVilleComponent } from '../horloge-ville/horloge-ville';

// Interface pour structurer nos données
interface HorlogeData {
  ville: string;
  timezone: string;
  heure: string;
}

@Component({
  selector: 'app-horloge-mondiale',
  standalone: true,
  imports: [CommonModule, HorlogeVilleComponent], // Importe le composant enfant
  templateUrl: './horloge-mondiale.html',
  styleUrls: ['./horloge-mondiale.css']
})
export class HorlogeMondialeComponent implements OnInit, OnDestroy {
  private intervalId?: number;

  // 1. Liste des fuseaux horaires
  horloges: HorlogeData[] = [
    { ville: 'Paris', timezone: 'Europe/Paris', heure: '' },
    { ville: 'New York', timezone: 'America/New_York', heure: '' },
    { ville: 'Tokyo', timezone: 'Asia/Tokyo', heure: '' }
  ];

  ngOnInit(): void {
    this.mettreAJourHeures(); // Affichage initial
    // Lance la mise à jour toutes les secondes
    this.intervalId = window.setInterval(() => this.mettreAJourHeures(), 1000);
  }

  ngOnDestroy(): void {
    // Nettoie l'intervalle pour éviter les fuites de mémoire
    clearInterval(this.intervalId);
  }

  // 2. Méthode pour définir l'heure
  mettreAJourHeures(): void {
    this.horloges.forEach(horloge => {
      horloge.heure = new Date().toLocaleTimeString('fr-FR', {
        timeZone: horloge.timezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
    });
  }
}