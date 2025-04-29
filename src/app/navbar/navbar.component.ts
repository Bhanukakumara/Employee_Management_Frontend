import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [ RouterLink,],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  menuActive: boolean = false;
  toggleMenu() {
    this.menuActive = !this.menuActive;
  }
  closeMenu() {
    this.menuActive = false;
  }
}
