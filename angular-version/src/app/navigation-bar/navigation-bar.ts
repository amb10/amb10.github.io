import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconRegistry, MatIconModule } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-navigation-bar',
  imports: [MatIconModule, RouterLink, RouterLinkActive],
  templateUrl: './navigation-bar.html',
  styleUrl: './navigation-bar.css',
})
export class NavigationBar {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'salon',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/hair-salon-icon.svg'
      )
    );
  }
}
