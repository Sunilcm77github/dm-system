import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DepartmentsService } from '../../../services/departments/departments.service';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../models/material.model';

@Component({
  selector: 'app-department-entry',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule],
  templateUrl: './department-entry.component.html',
  styleUrl: './department-entry.component.scss',
})
export class DepartmentEntryComponent {
  roleForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<DepartmentEntryComponent>,
    private fb: FormBuilder,
    private departmentService: DepartmentsService,
    private router: Router
  ) {
    this.roleForm = this.fb.group({
      role: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSave(): void {
    if (this.roleForm.valid) {
      const payload = this.data();
      this.departmentService.createDepartment(payload).subscribe({
        next: (response) => {
          console.log('role created successfully', response);
          this.departmentService.loadDepartment();
        },
        error: (error) => {
          console.error('Error creating class', error);
        },
      });

      this.dialogRef.close(this.roleForm.value);
    } else {
      this.markAllAsTouched();
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  markAllAsTouched() {
    this.roleForm.markAllAsTouched();
  }

  data() {
    const { role, description } = this.roleForm.value;
    return {
      role,
      description,
    };
  }
}
