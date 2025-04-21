import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-badges',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule],
  template: `
  <div class="page-container">
    <div class="page-header">
      <h1>Your Badges</h1>
      <p class="subtitle">Collect badges by completing activities and sharing skills</p>
    </div>
    
    <div class="badges-grid">
      <mat-card *ngFor="let badge of badges" class="badge-card" [ngClass]="{'earned': badge.earned}">
        <div class="badge-icon" [ngClass]="badge.type">
          <mat-icon>{{ badge.icon }}</mat-icon>
        </div>
        
        <mat-card-header>
          <mat-card-title>{{ badge.name }}</mat-card-title>
          <mat-icon class="status-icon" [ngClass]="{'earned': badge.earned}">
            {{ badge.earned ? 'check_circle' : 'radio_button_unchecked' }}
          </mat-icon>
        </mat-card-header>

        <mat-card-content>
          <p class="badge-description">{{ badge.description }}</p>
          <div class="badge-tag" [ngClass]="badge.type">{{ getBadgeTypeLabel(badge.type) }}</div>
        </mat-card-content>

        <mat-card-actions>
          <button mat-flat-button class="claim-button" *ngIf="!badge.earned">Claim Badge</button>
          <span class="earned-date" *ngIf="badge.earned">Earned on {{ badge.earnedDate }}</span>
        </mat-card-actions>
      </mat-card>
    </div>
    
    <div class="badges-progress">
      <h2>Your Progress</h2>
      <div class="progress-container">
        <div class="progress-label">
          <span>Overall completion</span>
          <span>{{ getEarnedPercentage() }}%</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" [style.width.%]="getEarnedPercentage()"></div>
        </div>
      </div>
    </div>
  </div>
  `,
  styles: [`
    .page-container {
      padding: 24px;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .page-header {
      margin-bottom: 32px;
    }
    
    .page-header h1 {
      font-size: 28px;
      font-weight: 500;
      margin: 0 0 8px 0;
      color: #2c3e50;
    }
    
    .subtitle {
      color: #718096;
      font-size: 16px;
    }
    
    .badges-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 24px;
      margin-bottom: 40px;
    }
    
    .badge-card {
      position: relative;
      border-radius: 12px;
      overflow: hidden;
      transition: all 0.3s ease;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1);
      padding: 24px;
    }
    
    .badge-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);
    }
    
    .badge-card.earned {
      border-left: 4px solid #4fc3f7;
    }
    
    .badge-icon {
      position: absolute;
      top: 12px;
      right: 12px;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      color: white;
    }
    
    .badge-icon.bronze {
      background: linear-gradient(135deg, #d1913c, #ffd194);
    }
    
    .badge-icon.silver {
      background: linear-gradient(135deg, #9e9e9e, #e0e0e0);
    }
    
    .badge-icon.gold {
      background: linear-gradient(135deg, #f9d423, #e65c00);
    }
    
    mat-card-header {
      padding: 0;
      margin-bottom: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    mat-card-title {
      font-size: 18px;
      font-weight: 500;
      margin: 0;
      color: #2c3e50;
    }
    
    .status-icon {
      font-size: 20px;
    }
    
    .status-icon.earned {
      color: #4fc3f7;
    }
    
    .badge-description {
      color: #718096;
      font-size: 14px;
      line-height: 1.5;
      margin-bottom: 16px;
    }
    
    .badge-tag {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 16px;
      font-size: 12px;
      font-weight: 500;
      text-transform: uppercase;
    }
    
    .badge-tag.bronze {
      background-color: rgba(209, 145, 60, 0.1);
      color: #d1913c;
    }
    
    .badge-tag.silver {
      background-color: rgba(158, 158, 158, 0.1);
      color: #9e9e9e;
    }
    
    .badge-tag.gold {
      background-color: rgba(249, 212, 35, 0.1);
      color: #e65c00;
    }
    
    mat-card-actions {
      padding: 8px 0 0 0;
      margin: 0;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    
    .claim-button {
      background: linear-gradient(135deg, #4fc3f7, #2196f3);
      color: white;
      border-radius: 20px;
      font-weight: 500;
      padding: 4px 16px;
      text-transform: uppercase;
      font-size: 12px;
      letter-spacing: 0.5px;
      transition: all 0.3s ease;
    }
    
    .claim-button:hover {
      box-shadow: 0 4px 8px rgba(33, 150, 243, 0.3);
      transform: translateY(-2px);
    }
    
    .earned-date {
      font-size: 12px;
      color: #718096;
      font-style: italic;
    }
    
    .badges-progress {
      background: white;
      border-radius: 12px;
      padding: 24px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1);
    }
    
    .badges-progress h2 {
      font-size: 20px;
      font-weight: 500;
      margin: 0 0 20px 0;
      color: #2c3e50;
    }
    
    .progress-container {
      width: 100%;
    }
    
    .progress-label {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
      font-size: 14px;
      color: #718096;
    }
    
    .progress-bar {
      height: 8px;
      background-color: #e2e8f0;
      border-radius: 4px;
      overflow: hidden;
    }
    
    .progress-fill {
      height: 100%;
      background: linear-gradient(135deg, #4fc3f7, #2196f3);
      border-radius: 4px;
      transition: width 0.3s ease;
    }
  `]
})
export class BadgesComponent {
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