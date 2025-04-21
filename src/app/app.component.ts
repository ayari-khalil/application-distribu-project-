import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule
  ],
  template: `
    <div class="flex h-screen bg-gray-100">
      <mat-sidenav-container class="w-full">
        <mat-sidenav #sidenav mode="side" opened class="sidenav">
          <div class="sidenav-header">
            <mat-icon class="text-primary">swap_horiz</mat-icon>
            <h1 class="sidenav-title">SkillExchange</h1>
          </div>

          <nav class="nav-links">
            <a mat-button routerLink="/dashboard" class="nav-link">
              <mat-icon>dashboard</mat-icon>
              <span>Dashboard</span>
            </a>
            <a mat-button routerLink="/badges" class="nav-link">
              <mat-icon>military_tech</mat-icon>
              <span>Badges</span>
            </a>
            <a mat-button routerLink="/leaderboard" class="nav-link">
              <mat-icon>leaderboard</mat-icon>
              <span>Leaderboard</span>
            </a>
            <a mat-button routerLink="/history" class="nav-link">
              <mat-icon>history</mat-icon>
              <span>History</span>
            </a>
          </nav>

          <div class="progress">
            <div class="progress-info">
              <mat-icon class="text-primary">person</mat-icon>
              <span class="font-medium text-sm">Your Progress</span>
            </div>
            <div class="progress-details">
              <div>Level: <span class="font-semibold">5</span></div>
              <div>Points: <span class="font-semibold">2,450</span></div>
            </div>
          </div>
        </mat-sidenav>

        <mat-sidenav-content>
          <mat-toolbar color="primary" class="toolbar">
            <button mat-icon-button (click)="sidenav.toggle()" aria-label="Toggle menu">
              <mat-icon>menu</mat-icon>
            </button>
            <span class="toolbar-title">SkillExchange Gamification</span>
            <span class="welcome-message">Welcome, User!</span>
          </mat-toolbar>

          <div class="content">
            <router-outlet></router-outlet>
          </div>
        </mat-sidenav-content>
      </mat-sidenav-container>
    </div>
  `,
  styles: [`
    /* Global Styles */
    .text-primary {
      color: #6200ea;
    }
    
    /* Sidenav Styles */
    .sidenav {
      background: #ffffff;
      padding: 20px;
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
      width: 250px;
      transition: transform 0.3s ease;
    }
    
    .sidenav-header {
      display: flex;
      align-items: center;
      margin-bottom: 30px;
    }

    .sidenav-title {
      margin-left: 10px;
      font-size: 1.5rem;
      font-weight: bold;
      color: #6200ea;
    }

    .nav-links {
      display: flex;
      flex-direction: column;
    }

    .nav-link {
      display: flex;
      align-items: center;
      padding: 12px 20px;
      color: #333;
      text-align: left;
      font-size: 1rem;
      border-radius: 5px;
      margin-bottom: 12px;
      transition: background-color 0.2s ease;
    }

    .nav-link:hover {
      background-color: #f1f1f1;
    }

    .nav-link mat-icon {
      margin-right: 10px;
    }

    .progress {
      margin-top: auto;
      background-color: #f7f7f7;
      padding: 20px;
      border-radius: 10px;
    }

    .progress-info {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }

    .progress-details {
      font-size: 0.9rem;
      color: #666;
    }

    /* Toolbar Styles */
    .toolbar {
      display: flex;
      align-items: center;
      padding: 16px;
      background-color: #6200ea;
      color: white;
    }

    .toolbar-title {
      margin-left: 20px;
      font-size: 1.5rem;
      font-weight: bold;
    }

    .welcome-message {
      margin-left: auto;
      font-size: 1.1rem;
      font-weight: 500;
    }

    /* Content Styles */
    .content {
      padding: 20px;
    }

  `]
})
export class AppComponent { 
  title = 'SkillExchange'; 
}
