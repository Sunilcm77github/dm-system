import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DepartmentEntryComponent } from '../department-entry/department-entry.component';

@Component({
  selector: 'app-new-department-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-department-btn.component.html',
  styleUrl: './new-department-btn.component.scss',
})
export class NewDepartmentBtnComponent {
  constructor(private dialog: MatDialog) {}

  openDepartmentDialog(): void {
    const dialogRef = this.dialog.open(DepartmentEntryComponent, {
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
