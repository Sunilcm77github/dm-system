import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { UserGridOptionsComponent } from '../user-grid-options/user-grid-options.component';
import { UsersService } from '../../../services/user/users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-grid',
  standalone: true,
  imports: [CommonModule, AgGridModule],
  templateUrl: './user-grid.component.html',
  styleUrls: ['./user-grid.component.scss'],
})
export class UserGridComponent implements OnInit, OnDestroy {
  users: any;
  loading = true;
  error: string | null = null;
  private userUpdatedSubscription!: Subscription;

  constructor(private http: HttpClient, private userService: UsersService) {}

  ngOnInit(): void {
    this.loadALlUsers();
    this.userUpdatedSubscription = this.userService
      .getUusersUpdatedListner()
      .subscribe(() => this.loadALlUsers());
  }

  ngOnDestroy(): void {
    if (this.userUpdatedSubscription) {
      this.userUpdatedSubscription.unsubscribe();
    }
  }

  loadALlUsers() {
    this.userService.loadUser().subscribe({
      next: (response: any) => {
        this.users = response;
      },
    });
  }

  deleteUser(userId: any, rowIndex: number) {
    const id = userId._id ? userId._id.$oid : userId;

    console.log('Deleting role with ID:', id);
    if (!id) {
      console.error('No valid role ID found');
      return;
    }

    this.userService.deleteUser(id).subscribe({
      next: () => {
        this.users.splice(rowIndex, 1);
        this.users = [...this.users];
      },
      error: (err) => {
        console.error('Failed to delete role:', err);
        this.error = 'Failed to delete role';
      },
    });
  }

  columnDefs: ColDef[] = [
    {
      headerName: 'SL.NO',
      valueGetter: 'node.rowIndex + 1',
      headerClass: ' text-center',
      maxWidth: 110,
    },
    {
      headerName: 'User Name',
      field: 'userName',
      headerClass: ' text-center',
    },
    {
      headerName: 'Mobile No',
      field: 'mobileNumber',
      headerClass: 'text-center',
    },
    {
      headerName: 'Email',
      field: 'email',
      headerClass: 'text-center',
    },
    {
      headerName: 'Department',
      field: 'departments',
      headerClass: 'text-center',
    },
    {
      headerName: 'Role',
      field: 'roles',
      headerClass: 'text-center',
    },
    {
      headerName: 'Created At',
      valueGetter: () => new Date().toLocaleDateString(),
      headerClass: 'text-center',
      cellClass: ' text-center',
    },
    {
      headerName: 'Options',
      field: 'options',
      cellRenderer: (params: any) => {
        const deleteIcon = document.createElement('i');
        deleteIcon.className = 'fas fa-trash text-red-500';
        deleteIcon.style.cursor = 'pointer';
        deleteIcon.style.marginRight = '10px';

        deleteIcon.addEventListener('click', () => {
          const user = this.users[params.node.rowIndex];
          this.deleteUser(user, params.node.rowIndex);
        });

        return deleteIcon;
      },
      headerClass: 'text-center',
      cellClass: ' text-center',
    },
  ];

  defaultColDef = {
    flex: 1,
    sortable: true,
    filter: true,
  };
}
