import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inventory.html'
})
export class Inventory {
  selectedMainTab: string = 'antenna';
  selectedInnerTab: string = 'rotation';
  showDetails: boolean = false;


  selectMainTab(tab: string): void {
    this.selectedMainTab = tab;
  }

  selectInnerTab(tab: string): void {
    this.selectedInnerTab = tab;
  }
}
