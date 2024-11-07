import { Component } from '@angular/core';
import { NewDepartmentBtnComponent } from "../../../core/components/departments/new-department-btn/new-department-btn.component";
import { DepartmentGridComponent } from "../../../core/components/departments/department-grid/department-grid.component";

@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [NewDepartmentBtnComponent, DepartmentGridComponent],
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.scss'
})
export class DepartmentsComponent {

}
