import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-history',
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
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
