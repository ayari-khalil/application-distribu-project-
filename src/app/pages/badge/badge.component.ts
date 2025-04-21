import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-badge',
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.css'
})
export class BadgeComponent {
  badges = [
    {
      name: 'First Exchange',
      description: 'Complete your first skill exchange with another user on the platform',
      type: 'bronze',
      icon: 'swap_horiz',
      earned: true,
      earnedDate: 'Apr 12, 2025'
    },
    {
      name: 'Mentor Master',
      description: 'Help 10 different users learn a new skill through mentoring sessions',
      type: 'silver',
      icon: 'school',
      earned: true,
      earnedDate: 'Apr 18, 2025'
    },
    {
      name: 'Skill Champion',
      description: 'Reach level 10 in any skill category by completing relevant challenges',
      type: 'gold',
      icon: 'emoji_events',
      earned: false
    },
    {
      name: 'Community Builder',
      description: 'Create a skill exchange group that has at least 5 active members',
      type: 'silver',
      icon: 'groups',
      earned: false
    },
    {
      name: 'Knowledge Seeker',
      description: 'Complete learning sessions in 5 different skill categories',
      type: 'bronze',
      icon: 'psychology',
      earned: true,
      earnedDate: 'Apr 15, 2025'
    },
    {
      name: 'Perfect Streak',
      description: 'Maintain activity on the platform for 30 consecutive days',
      type: 'gold',
      icon: 'auto_graph',
      earned: false
    }
  ];
  
  getBadgeTypeLabel(type: string): string {
    return type.charAt(0).toUpperCase() + type.slice(1);
  }
  
  getEarnedPercentage(): number {
    const earnedBadges = this.badges.filter(badge => badge.earned).length;
    return Math.round((earnedBadges / this.badges.length) * 100);
  }

}
