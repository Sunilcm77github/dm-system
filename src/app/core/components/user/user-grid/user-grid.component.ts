import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { UserGridOptionsComponent } from '../user-grid-options/user-grid-options.component';

@Component({
  selector: 'app-user-grid',
  standalone: true,
  imports: [CommonModule, AgGridModule],
  templateUrl: './user-grid.component.html',
  styleUrls: ['./user-grid.component.scss'],
})
export class UserGridComponent implements OnInit {
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
      headerName: 'Created At',
      valueGetter: () => new Date().toLocaleDateString(),
      headerClass: 'text-center',
      cellClass: ' text-center',
    },
    {
      headerName: 'Options',
      field: 'options',
      cellRenderer: UserGridOptionsComponent,
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
