import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-history',
  imports: [CommonModule, MatCardModule, MatIconModule],
  template: `
  <div class="space-y-4">
    <mat-card *ngFor="let activity of activities" class="activity-card">
      <div class="flex items-center">
        <!-- Activity Icon -->
        <mat-icon [class]="'mr-4 ' + activity.iconColor" class="text-3xl">{{ activity.icon }}</mat-icon>
        <div class="flex-1">
          <!-- Activity Title & Description -->
          <h3 class="font-semibold text-lg">{{ activity.title }}</h3>
          <p class="text-sm text-gray-600">{{ activity.description }}</p>
        </div>
        <!-- Points and Date -->
        <div class="text-right">
          <div [class]="'text-lg font-bold ' + activity.pointsColor">
            {{ activity.points > 0 ? '+' : '' }}{{ activity.points }}
          </div>
          <div class="text-sm text-gray-500">{{ activity.date }}</div>
        </div>
      </div>
    </mat-card>
  </div>
  `,
  styles: [`
    .activity-card {
      @apply transition-all hover:shadow-lg hover:bg-gray-50;
      padding: 16px;
      border-radius: 8px;
      background-color: white;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }
    mat-icon {
      @apply text-2xl;
    }
    h3 {
      @apply font-medium;
    }
  `]
})
export class HistoryComponent {
  activities = [
    {
      title: 'Completed JavaScript Tutorial',
      description: 'Finished teaching a beginner JavaScript course',
      points: 100,
      date: '2024-01-15',
      icon: 'school',
      iconColor: 'text-blue-500',
      pointsColor: 'text-green-500'
    },
    {
      title: 'New Badge Earned',
      description: 'Earned the "Mentor Master" badge',
      points: 50,
      date: '2024-01-14',
      icon: 'military_tech',
      iconColor: 'text-yellow-500',
      pointsColor: 'text-green-500'
    },
    {
      title: 'Skill Level Up',
      description: 'Reached Level 5 in Python',
      points: 200,
      date: '2024-01-10',
      icon: 'emoji_events',
      iconColor: 'text-purple-500',
      pointsColor: 'text-green-500'
    },
    {
      title: 'Lost Points for Inactivity',
      description: 'Points deducted for not completing activities this week',
      points: -50,
      date: '2024-01-05',
      icon: 'remove_circle',
      iconColor: 'text-red-500',
      pointsColor: 'text-red-500'
    }
  ];
}
