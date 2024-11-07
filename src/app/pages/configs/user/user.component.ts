import { Component } from '@angular/core';
import { NewUserBtnComponent } from "../../../core/components/user/new-user-btn/new-user-btn.component";
import { UserGridComponent } from "../../../core/components/user/user-grid/user-grid.component";


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NewUserBtnComponent, UserGridComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

}
