import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserEntryComponent } from '../user-enrty/user-enrty.component';

@Component({
  selector: 'app-new-user-btn',
  standalone: true,
  imports: [],
  templateUrl: './new-user-btn.component.html',
  styleUrl: './new-user-btn.component.scss'
})
export class NewUserBtnComponent {
  constructor(private dialog: MatDialog) {}

  openUserDialog(): void {
    const dialogRef = this.dialog.open(UserEntryComponent, {
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
