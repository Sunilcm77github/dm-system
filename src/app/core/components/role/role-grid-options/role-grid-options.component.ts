import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-role-grid-options',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './role-grid-options.component.html',
  styleUrl: './role-grid-options.component.scss',
})
export class RoleGridOptionsComponent {
  @Output() deleteRow = new EventEmitter<void>();

  agInit(params: any): void {
    // Optional initialization logic
  }

  refresh(params: any): boolean {
    return false;
  }

  public onDelete() {
    this.deleteRow.emit();
    console.log('clicked');
  }
}
