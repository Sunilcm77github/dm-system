import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MaterialModule } from '../../../models/material.model';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-role-entry',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule],
  templateUrl: './role-entry.component.html',
  styleUrl: './role-entry.component.scss',
})
export class RoleEntryComponent {
  roleForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<RoleEntryComponent>,
    private fb: FormBuilder
  ) {
    this.roleForm = this.fb.group({
      role: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  onSave(): void {
    if (this.roleForm.valid) {
      this.dialogRef.close(this.roleForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
