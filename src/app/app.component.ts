import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule
  ],
  template: `
    <div class="app-container">
      <mat-sidenav-container class="sidenav-container">
        <mat-sidenav mode="side" opened class="sidenav">
          <div class="logo-container">
            <div class="logo-icon">
              <mat-icon>apps</mat-icon>
            </div>
            <span class="logo-text">SkillExchange</span>
          </div>
          
          <nav class="nav-links">
            <a mat-button routerLink="/dashboard" routerLinkActive="active-link" class="nav-link">
              <div class="icon-container">
                <mat-icon>dashboard</mat-icon>
              </div>
              <span class="nav-text">Dashboard</span>
            </a>
            <a mat-button routerLink="/badges" routerLinkActive="active-link" class="nav-link">
              <div class="icon-container">
                <mat-icon>military_tech</mat-icon>
              </div>
              <span class="nav-text">Badges</span>
            </a>
            <a mat-button routerLink="/leaderboard" routerLinkActive="active-link" class="nav-link">
              <div class="icon-container">
                <mat-icon>leaderboard</mat-icon>
              </div>
              <span class="nav-text">Leaderboard</span>
            </a>
            <a mat-button routerLink="/history" routerLinkActive="active-link" class="nav-link">
              <div class="icon-container">
                <mat-icon>history</mat-icon>
              </div>
              <span class="nav-text">History</span>
            </a>
          </nav>
          
          <div class="upgrade-box">
            <h4>Upgrade Account</h4>
            <p>Get access to premium features and enhance your experience.</p>
            <button mat-raised-button color="primary" class="upgrade-btn">Upgrade Now</button>
          </div>
        </mat-sidenav>
        
        <mat-sidenav-content class="content">
          <router-outlet></router-outlet>
        </mat-sidenav-content>
      </mat-sidenav-container>
    </div>
  `,
  styles: [`
    .app-container {
      height: 100vh;
      display: flex;
      flex-direction: column;
    }
    
    .sidenav-container {
      flex: 1;
      height: 100%;
    }
    
    .sidenav {
      width: 280px;
      background: linear-gradient(135deg, #2c3e50, #1a2639);
      color: white;
      display: flex;
      flex-direction: column;
      padding: 0;
      box-shadow: 3px 0 10px rgba(0, 0, 0, 0.2);
    }
    
    .logo-container {
      display: flex;
      align-items: center;
      padding: 24px 16px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .logo-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      background: #4fc3f7;
      border-radius: 8px;
      margin-right: 12px;
    }
    
    .logo-text {
      font-size: 20px;
      font-weight: 500;
      letter-spacing: 0.5px;
    }
    
    .nav-links {
      display: flex;
      flex-direction: column;
      padding: 16px 0;
    }
    
    .nav-link {
      display: flex;
      align-items: center;
      height: 48px;
      padding: 0 16px;
      margin: 4px 8px;
      border-radius: 8px;
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
      transition: all 0.3s ease;
    }
    
    .nav-link:hover {
      background: rgba(255, 255, 255, 0.1);
      color: white;
    }
    
    .active-link {
      background: linear-gradient(135deg, #4fc3f7, #2196f3);
      color: white;
      box-shadow: 0 4px 8px rgba(33, 150, 243, 0.3);
    }
    
    .icon-container {
      display: inline-block;
      width: 24px;
      margin-right: 12px;
      text-align: center;
    }
    
    .nav-text {
      display: inline-block;
    }
    
    .content {
      padding: 24px;
      background-color: #f5f7fa;
    }
    
    .upgrade-box {
      margin-top: auto;
      padding: 20px 16px;
      background: rgba(255, 255, 255, 0.1);
      margin: 16px;
      border-radius: 8px;
      margin-top: auto;
    }
    
    .upgrade-box h4 {
      margin: 0 0 8px 0;
      font-size: 16px;
      font-weight: 500;
    }
    
    .upgrade-box p {
      margin: 0 0 16px 0;
      font-size: 14px;
      opacity: 0.8;
      line-height: 1.4;
    }
    
    .upgrade-btn {
      width: 100%;
      background: linear-gradient(135deg, #4fc3f7, #2196f3) !important;
      transition: all 0.3s ease;
    }
    
    .upgrade-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(33, 150, 243, 0.4) !important;
    }
  `]
})
export class AppComponent {
  title = 'SkillExchange';
}