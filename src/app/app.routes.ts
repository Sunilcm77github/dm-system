import { Routes } from '@angular/router';
import { FilesComponent } from './pages/files/files.component';
import { RoleComponent } from './pages/role/role.component';
import { UserComponent } from './pages/user/user.component';
import { StoreComponent } from './pages/store/store.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DepartmentsComponent } from './pages/departments/departments.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'files', component: FilesComponent },
  { path: 'store', component: StoreComponent },
  { path: 'role', component: RoleComponent },
  { path: 'departments', component: DepartmentsComponent },
  { path: 'user', component: UserComponent },
];
