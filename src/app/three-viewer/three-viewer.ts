import { Component } from '@angular/core';
import { Annoation } from '../annoation/annoation';
import { Reports } from '../reports/reports';
import { Inventory } from '../inventory/inventory';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-three-viewer',
  standalone: true,
  imports: [Annoation, Reports, Inventory, CommonModule,FormsModule],
  templateUrl: './three-viewer.html',
  styleUrls: ['./three-viewer.css']
})
export class ThreeViewer{
  selected: 'annotation' | 'reports' | 'inventory' = 'annotation';
  select(type: 'annotation' | 'reports' | 'inventory') {
    this.selected = type;
  }
}
