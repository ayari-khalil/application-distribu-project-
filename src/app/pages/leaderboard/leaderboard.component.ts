import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-leaderboard',
  imports: [CommonModule, MatTableModule, MatCardModule],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.css'
})
export class LeaderboardComponent {
  displayedColumns: string[] = ['position', 'name', 'points', 'badges'];
  users = [
    { position: 1, name: 'John Doe', points: 3200, badges: 15 },
    { position: 2, name: 'Jane Smith', points: 2900, badges: 12 },
    { position: 3, name: 'Mike Johnson', points: 2750, badges: 11 }
  ];

}
