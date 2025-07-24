import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import {
  faBrush,
  faEyeDropper,
  faNoteSticky,
  faRuler,
  faScissors,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-services',
  imports: [MatIconModule, FontAwesomeModule],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  constructor(library: FaIconLibrary) {
    library.addIcons(faBrush, faEyeDropper, faNoteSticky, faRuler, faScissors);
  }
}
