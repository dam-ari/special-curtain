import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovingElementDirective } from './directives/moving-element.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MovingElementDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'special-curtain-app';
}
