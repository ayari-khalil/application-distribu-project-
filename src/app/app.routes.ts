import { Routes } from '@angular/router';
import { AddLevelComponent } from './pages/add-level/add-level.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard.component')
      .then(m => m.DashboardComponent)
  },
  {
    path: 'badges',
    loadComponent: () => import('./pages/badge/badge.component')
      .then(m => m.BadgeComponent)
  },
  {
    path: 'leaderboard',
    loadComponent: () => import('./pages/leaderboard/leaderboard.component')
      .then(m => m.LeaderboardComponent)
  },
  {
    path: 'history',
    loadComponent: () => import('./pages/history/history.component')
      .then(m => m.HistoryComponent)
  },
  
  {
    path: 'add-level/:id',
    loadComponent: () => import('./pages/add-level/add-level.component').then(m => m.AddLevelComponent)
  }
];