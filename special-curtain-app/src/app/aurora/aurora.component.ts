import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-aurora',
  standalone: true,
  imports: [NgFor],
  templateUrl: './aurora.component.html',
  styleUrl: './aurora.component.scss'
})
export class AuroraComponent {
  @Input() text: String[] = ['Aurora', 'Of', 'the', 'Horn', 'Of', 'The', 'Mighty', 'Unicorn']
  
}
