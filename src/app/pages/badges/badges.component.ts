import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-badges',
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule],
  template: `
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <mat-card *ngFor="let badge of badges" class="badge-card transition-all transform hover:scale-105">
      <mat-card-header class="flex items-center justify-between">
        <mat-card-title class="font-semibold text-lg">{{ badge.name }}</mat-card-title>
        <mat-icon [class]="badge.earned ? 'text-green-500' : 'text-gray-400'">
          {{ badge.earned ? 'check_circle' : 'radio_button_unchecked' }}
        </mat-icon>
      </mat-card-header>

      <mat-card-content>
        <p class="text-gray-600 text-sm">{{ badge.description }}</p>
        <div class="mt-4">
          <span [class]="'badge ' + badge.type">{{ badge.type }}</span>
        </div>
      </mat-card-content>

      <mat-card-actions class="flex justify-end mt-4">
        <button mat-button color="primary" *ngIf="!badge.earned">Claim Badge</button>
      </mat-card-actions>
    </mat-card>
  </div>
  `,
  styles: [`
    .badge-card {
      @apply bg-white rounded-lg shadow-md p-4;
    }
    .badge-card:hover {
      @apply shadow-xl;
    }
    .badge {
      @apply inline-flex items-center px-3 py-1 rounded-full text-sm font-medium;
      transition: transform 0.3s ease;
    }
    .badge:hover {
      @apply transform scale-110;
    }
    .badge-gold {
      @apply bg-yellow-100 text-yellow-800;
    }
    .badge-silver {
      @apply bg-gray-100 text-gray-800;
    }
    .badge-bronze {
      @apply bg-orange-100 text-orange-800;
    }
  `]
})
export class BadgesComponent {
  badges = [
    {
      name: 'First Exchange',
      description: 'Complete your first skill exchange',
      type: 'badge-bronze',
      earned: true
    },
    {
      name: 'Mentor Master',
      description: 'Help 10 users learn a new skill',
      type: 'badge-silver',
      earned: true
    },
    {
      name: 'Skill Champion',
      description: 'Reach level 10 in any skill category',
      type: 'badge-gold',
      earned: false
    }
  ];
}
