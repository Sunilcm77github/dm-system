import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MaterialModule } from '../../../models/material.model';
import { MatDialogRef } from '@angular/material/dialog';
import { RoleService } from '../../../services/role/role.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role-entry',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule],
  templateUrl: './role-entry.component.html',
  styleUrl: './role-entry.component.scss',
})
export class RoleEntryComponent implements OnInit {
  roleForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<RoleEntryComponent>,
    private fb: FormBuilder,
    private roleService: RoleService,
    private router: Router
  ) {
    this.roleForm = this.fb.group({
      role: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    
  }

  onSave(): void {
    if (this.roleForm.valid) {
      const payload = this.data();
      this.roleService.createRole(payload).subscribe({
        next: (response) => {
          console.log('role created successfully', response);
          this.roleService.loadRole();
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
