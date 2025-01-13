import { NgFor } from '@angular/common';
import { Component} from '@angular/core';

@Component({
  selector: 'app-startup-intro',
  standalone: true,
  imports: [NgFor],
  templateUrl: './startup-intro.component.html',
  styleUrl: './startup-intro.component.scss'
})
export class StartupIntroComponent {
  boxes: number[] = Array.from({ length: 112 }, (_, i) => i);
}
