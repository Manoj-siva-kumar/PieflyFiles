import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {

  selectedMenu: string = 'home';

  setActiveMenu(menu: string) {
    this.selectedMenu = menu;
  }
}