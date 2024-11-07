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
  roles: any;
  loading = true;
  error: string | null = null;

  constructor(private http: HttpClient, private roleService: RoleService) {}

  ngOnInit(): void {
    this.loadRoles();
  }

  loadRoles() {
    this.roleService.loadRole().subscribe({
      next: (role: any) => {
        this.roles = role;
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
      cellRenderer: RoleGridOptionsComponent,
      headerClass: 'text-center',
      cellClass: ' text-center',
    },
  ];

  defultcoulmndef = {
    flex: 1,
    sortable: true,
    filter: true,
  };
}
