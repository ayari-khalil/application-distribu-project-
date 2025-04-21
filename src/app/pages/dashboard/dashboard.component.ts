import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, MatCardModule, MatIconModule, NgChartsModule],
  template: `
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    
    <!-- Points Card -->
    <mat-card class="stats-card">
      <mat-card-header>
        <mat-card-title>Total Points</mat-card-title>
        <mat-icon class="text-primary">stars</mat-icon>
      </mat-card-header>
      <mat-card-content>
        <h2 class="text-3xl font-bold">2,450</h2>
        <p class="text-sm text-gray-600">+150 this week</p>
      </mat-card-content>
    </mat-card>

    <!-- Badges Card -->
    <mat-card class="stats-card">
      <mat-card-header>
        <mat-card-title>Badges Earned</mat-card-title>
        <mat-icon class="text-primary">military_tech</mat-icon>
      </mat-card-header>
      <mat-card-content>
        <h2 class="text-3xl font-bold">12</h2>
        <p class="text-sm text-gray-600">2 new this month</p>
      </mat-card-content>
    </mat-card>

    <!-- Rank Card -->
    <mat-card class="stats-card">
      <mat-card-header>
        <mat-card-title>Current Rank</mat-card-title>
        <mat-icon class="text-primary">leaderboard</mat-icon>
      </mat-card-header>
      <mat-card-content>
        <h2 class="text-3xl font-bold">#15</h2>
        <p class="text-sm text-gray-600">Top 10%</p>
      </mat-card-content>
    </mat-card>
    
    <!-- Chart Card -->
    <mat-card class="stats-card col-span-1 md:col-span-2 lg:col-span-3">
      <mat-card-header>
        <mat-card-title>Points Over Time</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <div style="height: 300px;">
          <canvas baseChart [data]="lineChartData" [options]="lineChartOptions" [plugins]="lineChartPlugins" [type]="'line'"></canvas>
        </div>
      </mat-card-content>
    </mat-card>

  </div>
  `,
  styles: [`
    .stats-card {
      @apply transition-all hover:scale-105 transform bg-white rounded-lg shadow-md;
    }
    mat-card-header {
      @apply flex justify-between items-center;
    }
    mat-icon {
      @apply text-2xl;
    }
  `]
})
export class DashboardComponent {
  // Line chart data for points over time (weekly data)
  lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [2000, 2100, 2200, 2400, 2450, 2500], // Example data for points
        label: 'Points',
        fill: false,
        borderColor: '#3f51b5', // Primary color for the line
        tension: 0.1
      }
    ],
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6']
  };

  // Chart options
  lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.raw} points`
        }
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Week'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Points'
        }
      }
    }
  };

  // Plugins configuration (optional)
  lineChartPlugins = [];
}
