import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  constructor(private router: Router) {}
  isOpen: boolean = true; // Initially open

  toggleSidebar() {
    this.isOpen = !this.isOpen; // Toggle the sidebar state
  }
  isConfigDropdownOpen = false;
  toggleConfigDropdown() {
    this.isConfigDropdownOpen = !this.isConfigDropdownOpen;
  }

  onFileClick() {
    this.router.navigate(['/files']);
  }

  onStoreClick() {
    this.router.navigate(['/store']);
  }

  onUserClick() {
    this.router.navigate(['/user']);
  }
  onRoleClick() {
    this.router.navigate(['/role']);
  }

  onDepartmentsClick() {
    this.router.navigate(['/departments']);
  }
}
