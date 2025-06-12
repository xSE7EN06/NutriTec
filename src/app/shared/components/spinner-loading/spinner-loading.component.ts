import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spinner-loading',
  standalone: false,
  templateUrl: './spinner-loading.component.html',
  styleUrl: './spinner-loading.component.css'
})
export class SpinnerLoadingComponent {

  @Input() show: boolean = false;

}
