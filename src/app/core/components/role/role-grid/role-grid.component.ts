import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { RoleGridOptionsComponent } from '../role-grid-options/role-grid-options.component';
import { RoleService } from '../../../services/role/role.service';

@Component({
  selector: 'app-role-grid',
  standalone: true,
  imports: [CommonModule, AgGridModule],
  templateUrl: './role-grid.component.html',
  styleUrl: './role-grid.component.scss',
})
export class RoleGridComponent implements OnInit {
  roles: { role_id: string; role: string; description: string }[] = [];
  loading = true;
  error: string | null = null;

  constructor(private http: HttpClient, private roleService: RoleService) {}

  ngOnInit(): void {
    this.loadRoles();
  }

  loadRoles() {
    this.roleService.loadRole().subscribe({
      next: (roles: any) => {
        console.log('Fetched roles:', roles); // Log the fetched roles
        this.roles = roles;
      },
      error: (err) => {
        console.error('Failed to load roles:', err);
      },
    });
  }

  deleteRole(roleId: any, rowIndex: number) {
    // Extract the role ID from the object
    const id = roleId._id ? roleId._id.$oid : roleId; // Ensure to use $oid if it's an object

    console.log('Deleting role with ID:', id); // Log the ID to confirm

    if (!id) {
      console.error('No valid role ID found');
      return;
    }

    this.roleService.deleteRole(id).subscribe({
      next: () => {
        // Remove the row from the grid after successful deletion
        this.roles.splice(rowIndex, 1);
        this.roles = [...this.roles]; // Refresh the grid by updating the array reference
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
      headerName: 'Role Name',
      field: 'role',
      headerClass: ' text-center',
    },
    {
      headerName: 'Description',
      field: 'description',
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
      cellClass: 'text-center',
      cellRenderer: (params: any) => {
        const deleteIcon = document.createElement('i');
        deleteIcon.className = 'fas fa-trash text-red-500';
        deleteIcon.style.cursor = 'pointer';
        deleteIcon.style.marginRight = '10px';

        deleteIcon.addEventListener('click', () => {
          const role = this.roles[params.node.rowIndex];
          this.deleteRole(role, params.node.rowIndex);
        });

        return deleteIcon;
      },
    },
  ];

  defultcoulmndef = {
    flex: 1,
    sortable: true,
    filter: true,
  };
}
