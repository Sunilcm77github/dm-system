import { Component } from '@angular/core';
import { StoreDataComponent } from "../../core/components/store/store-data/store-data.component";

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [StoreDataComponent],
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss'
})
export class StoreComponent {

}
