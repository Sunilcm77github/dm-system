// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-user-enrty',
//   standalone: true,
//   imports: [],
//   templateUrl: './user-enrty.component.html',
//   styleUrl: './user-enrty.component.scss'
// })
// export class UserEnrtyComponent {

// }
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
  selector: 'app-user-entry',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule],
  templateUrl: './user-enrty.component.html',
  styleUrl: './user-enrty.component.scss'// corrected to styleUrls
})
export class UserEntryComponent {
  userForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<UserEntryComponent>,
    private fb: FormBuilder
  ) {
    this.userForm = this.fb.group({
      role: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  onSave(): void {
    if (this.userForm.valid) {
      this.dialogRef.close(this.userForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}

