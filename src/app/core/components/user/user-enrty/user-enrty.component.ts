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
import { UsersService } from '../../../services/user/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-entry',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule],
  templateUrl: './user-enrty.component.html',
  styleUrl: './user-enrty.component.scss', // corrected to styleUrls
})
export class UserEntryComponent implements OnInit {
  userForm: FormGroup;
  users: any;
  roles: { id: string; role: string }[] = [];
  departments: { id: string; department: string }[] = [];

  constructor(
    private dialogRef: MatDialogRef<UserEntryComponent>,
    private fb: FormBuilder,
    private userService: UsersService,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      userName: ['', Validators.required],
      email: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      departments: ['', Validators.required],
      roles: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadDepartments();
    this.loadRoles();
    this.loadUsers();
  }

  loadUsers() {
    this.userService.loadUser().subscribe({
      next: (response: any) => {
        this.users = response;
      },
    });
  }

  loadRoles(): void {
    this.userService.loadRole().subscribe({
      next: (roles) => {
        this.roles = roles.map((role: any) => ({
          id: role._id.$oid, // Extract the string ID
          role: role.role,
        }));
      },
      error: (error) => console.error('Error loading roles', error),
    });
  }

  loadDepartments(): void {
    this.userService.loadDepartment().subscribe({
      next: (departments) => {
        this.departments = departments.map((department: any) => ({
          id: department._id.$oid, // Extract the string ID
          department: department.department,
        }));
      },
      error: (error) => console.error('Error loading departments', error),
    });
  }

  onSave(): void {
    if (this.userForm.valid) {
      const payload = this.data();
      this.userService.createUser(payload).subscribe({
        next: (response) => {
          console.log('user created successfully', response);
          this.userService.loadUser();
        },
        error: (error) => {
          console.error('Error creating user', error);
        },
      });

      this.dialogRef.close(this.userForm.value);
      this.router.navigate(['/user']);
    } else {
      this.markAllAsTouched();
    }
  }
  markAllAsTouched() {
    this.userForm.markAllAsTouched();
  }

  data() {
    const { userName, mobileNumber, email, departments, roles } =
      this.userForm.value;
    return {
      userName,
      email,
      mobileNumber,
      roles: [roles],
      departments: [departments],
    };
  }
  onCancel(): void {
    this.dialogRef.close();
  }
}
