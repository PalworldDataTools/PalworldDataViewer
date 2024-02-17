import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SharedModule,
    RouterOutlet,
    AsyncPipe,
    RouterLink,
    RouterLinkActive,
    NgOptimizedImage,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  protected readonly RouterLinkActive = RouterLinkActive;
}
