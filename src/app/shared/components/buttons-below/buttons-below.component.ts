import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buttons-below',
  standalone: false,
  templateUrl: './buttons-below.component.html',
  styleUrl: './buttons-below.component.css'
})

export class ButtonsBelowComponent {
  //Mostrar u ocultar botones "Siguiente" o "Cancelar"
  @Input() showButtonRight!: boolean;
  @Input() showButtonLeft !: boolean;
  @Input() textButtonRight !: string;
  @Input() textButtonLeft !: string;

   @Input() disabled = true;

}
