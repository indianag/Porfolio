import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) {}

  navigateToSection(sectionId: string): void {
    const navigationExtras: NavigationExtras = {
      fragment: sectionId
    };

    // Navegar a la misma URL pero con un fragmento (sección) especificado
    this.router.navigate([], navigationExtras);
  }


}
