import { Component } from '@angular/core';

@Component({
  selector: 'app-role-grid-options',
  standalone: true,
  imports: [],
  templateUrl: './role-grid-options.component.html',
  styleUrl: './role-grid-options.component.scss',
})
export class RoleGridOptionsComponent {
  agInit(params: any): void {
    // Optional initialization logic
  }

  refresh(params: any): boolean {
    return false;
  }
}
