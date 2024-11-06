import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { RoleGridOptionsComponent } from '../role-grid-options/role-grid-options.component';

@Component({
  selector: 'app-role-grid',
  standalone: true,
  imports: [CommonModule, AgGridModule],
  templateUrl: './role-grid.component.html',
  styleUrl: './role-grid.component.scss',
})
export class RoleGridComponent implements OnInit {
  students: any;
  loading = true;
  error: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

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
