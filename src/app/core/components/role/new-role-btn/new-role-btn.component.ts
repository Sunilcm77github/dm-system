import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { RoleEntryComponent } from '../role-entry/role-entry.component';

@Component({
  selector: 'app-new-role-btn',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './new-role-btn.component.html',
  styleUrl: './new-role-btn.component.scss',
})
export class NewRoleBtnComponent {
  constructor(private dialog: MatDialog) {}

  openRoleDialog(): void {
    const dialogRef = this.dialog.open(RoleEntryComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('New Role:', result);
        // Handle the new role data (e.g., send it to an API)
      }
    });
  }
}
