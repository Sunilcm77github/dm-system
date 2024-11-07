import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { DepartmentGridOptionsComponent } from '../department-grid-options/department-grid-options.component';

@Component({
  selector: 'app-department-grid',
  standalone: true,
  imports: [CommonModule, AgGridModule],
  templateUrl: './department-grid.component.html',
  styleUrl: './department-grid.component.scss',
})
export class DepartmentGridComponent {
  roles: any;
  loading = true;
  error: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // this.loadDepartments();
  }

  // loadDepartments() {
  //   this.departmentService.loadRole().subscribe({
  //     next: (role: any) => {
  //       this.roles = role;
  //     },
  //   });
  // }

  columnDefs: ColDef[] = [
    {
      headerName: 'SL.NO',
      valueGetter: 'node.rowIndex + 1',
      headerClass: ' text-center',
      maxWidth: 110,
    },
    {
      headerName: 'Department Name',
      field: 'department',
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
      cellRenderer: DepartmentGridOptionsComponent,
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
