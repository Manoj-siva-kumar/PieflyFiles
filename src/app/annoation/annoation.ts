import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-annoation',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './annoation.html',
  styleUrls: ['./annoation.css']
})
export class Annoation {
  isVisible = false;

  toggleDetails(): void {
    this.isVisible = !this.isVisible;
  }
}
