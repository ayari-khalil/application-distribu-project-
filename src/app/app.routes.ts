import { Routes } from '@angular/router';

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
    loadComponent: () => import('./pages/badges/badges.component')
      .then(m => m.BadgesComponent)
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
  }
];