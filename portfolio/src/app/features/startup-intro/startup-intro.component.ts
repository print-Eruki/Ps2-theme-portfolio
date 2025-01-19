import { NgFor } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-startup-intro',
  standalone: true,
  imports: [NgFor],
  templateUrl: './startup-intro.component.html',
  styleUrl: './startup-intro.component.scss'
})
export class StartupIntroComponent implements OnInit {
  constructor(private router: Router) {}
  

  boxes: number[] = Array.from({ length: 112 }, (_, i) => i);
  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/memory-menu']);
    }, 16 * 1000);
  }
  
}
