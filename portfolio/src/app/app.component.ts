import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PS2DotsComponentComponent } from "./ps2-dots-component/ps2-dots-component.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PS2DotsComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
