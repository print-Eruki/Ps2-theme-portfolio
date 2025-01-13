import { Routes } from '@angular/router';
import { MemoryMenuComponent } from './features/memory-menu/memory-menu.component';
import { StartupIntroComponent } from './features/startup-intro/startup-intro.component';

export const routes: Routes = [
  {path: '', component: StartupIntroComponent},
  {path: 'memory-menu', component: MemoryMenuComponent}
];
