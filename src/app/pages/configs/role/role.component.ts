import { Component } from '@angular/core';
import { NewRoleBtnComponent } from '../../../core/components/role/new-role-btn/new-role-btn.component';
import { CommonModule } from '@angular/common';
import { RoleGridComponent } from '../../../core/components/role/role-grid/role-grid.component';

@Component({
  selector: 'app-role',
  standalone: true,
  imports: [CommonModule, NewRoleBtnComponent, RoleGridComponent],
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss'], // Note: Corrected 'styleUrl' to 'styleUrls'
})
export class RoleComponent {
  constructor() {}

  ngOnInit(): void {
    // Component initialization logic
  }
}
