import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DepartmentsService } from '../../../services/departments/departments.service';

@Component({
  selector: 'app-department-entry',
  standalone: true,
  imports: [],
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
      this.departmentService.createRole(payload).subscribe({
        next: (response) => {
          console.log('role created successfully', response);
          this.departmentService.loadRole();
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
