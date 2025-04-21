import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-leaderboard',
    imports: [CommonModule, MatTableModule, MatCardModule],
    template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Top Performers</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <table mat-table [dataSource]="users" class="w-full">
          <ng-container matColumnDef="position">
            <th mat-header-cell *matHeaderCellDef> Rank </th>
            <td mat-cell *matCellDef="let user"> #{{ user.position }} </td>
          </ng-container>

          <ng-container matColumnDef="name">
            <th mat-header-cell *matHeaderCellDef> Name </th>
            <td mat-cell *matCellDef="let user"> {{ user.name }} </td>
          </ng-container>

          <ng-container matColumnDef="points">
            <th mat-header-cell *matHeaderCellDef> Points </th>
            <td mat-cell *matCellDef="let user"> {{ user.points }} </td>
          </ng-container>

          <ng-container matColumnDef="badges">
            <th mat-header-cell *matHeaderCellDef> Badges </th>
            <td mat-cell *matCellDef="let user"> {{ user.badges }} </td>
          </ng-container>

          <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
          <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
        </table>
      </mat-card-content>
    </mat-card>
  `
})
export class LeaderboardComponent {
  displayedColumns: string[] = ['position', 'name', 'points', 'badges'];
  users = [
    { position: 1, name: 'John Doe', points: 3200, badges: 15 },
    { position: 2, name: 'Jane Smith', points: 2900, badges: 12 },
    { position: 3, name: 'Mike Johnson', points: 2750, badges: 11 }
  ];
}