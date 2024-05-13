import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovingElementDirective } from './directives/moving-element.directive';
import { AuroraComponent } from './aurora/aurora.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MovingElementDirective, AuroraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'special-curtain-app';
  
}
