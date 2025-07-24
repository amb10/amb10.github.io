import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Import once start using
import { NavigationBar } from './navigation-bar/navigation-bar';

@Component({
  selector: 'app-root',
  imports: [NavigationBar, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'routing-app';
}
