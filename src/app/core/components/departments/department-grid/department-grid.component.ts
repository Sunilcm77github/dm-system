import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { DepartmentGridOptionsComponent } from '../department-grid-options/department-grid-options.component';
import { DepartmentsService } from '../../../services/departments/departments.service';

@Component({
  selector: 'app-department-grid',
  standalone: true,
  imports: [CommonModule, AgGridModule],
  templateUrl: './department-grid.component.html',
  styleUrl: './department-grid.component.scss',
})
export class DepartmentGridComponent {
  departments: any;
  loading = true;
  error: string | null = null;

  constructor(
    private http: HttpClient,
    private departmentService: DepartmentsService
  ) {}

  ngOnInit(): void {
    this.loadDepartments();
  }

  loadDepartments() {
    this.departmentService.loadDepartment().subscribe({
      next: (department: any) => {
        this.departments = department;
      },
    });
  }

  deleteDepartment(departmentId: any, rowIndex: number) {
    // Extract the role ID from the object
    const id = departmentId._id ? departmentId._id.$oid : departmentId; // Ensure to use $oid if it's an object

    console.log('Deleting role with ID:', id); // Log the ID to confirm

    if (!id) {
      console.error('No valid role ID found');
      return;
    }

    this.departmentService.deleteDepartment(id).subscribe({
      next: () => {
        // Remove the row from the grid after successful deletion
        this.departments.splice(rowIndex, 1);
        this.departments = [...this.departments]; // Refresh the grid by updating the array reference
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
      cellRenderer: (params: any) => {
        const deleteIcon = document.createElement('i');
        deleteIcon.className = 'fas fa-trash text-red-500';
        deleteIcon.style.cursor = 'pointer';
        deleteIcon.style.marginRight = '10px';

        deleteIcon.addEventListener('click', () => {
          const department = this.departments[params.node.rowIndex];
          this.deleteDepartment(department, params.node.rowIndex);
        });

        return deleteIcon;
      },
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
