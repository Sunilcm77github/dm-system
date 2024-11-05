import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  isOpen: boolean = true; // Initially open

  toggleSidebar() {
    this.isOpen = !this.isOpen; // Toggle the sidebar state
  }
  isConfigDropdownOpen = false;
  toggleConfigDropdown() {
    this.isConfigDropdownOpen = !this.isConfigDropdownOpen;
  }
}
