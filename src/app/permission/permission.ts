import { Component, OnInit } from '@angular/core';
import { permissionData } from './permission.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-permission',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './permission.html',
})
export class Permission implements OnInit {
  permissionData = permissionData;

  modelNames: string[] = [];
  groupedPermissions: { [key: string]: string[] } = {};
  selectedPermissions: { [key: string]: boolean[] } = {};
  selectAllMap: { [key: string]: boolean } = {};

  ngOnInit(): void {
    this.groupByModel();
  }

  groupByModel(): void {
    // Group permissions by model name
    this.permissionData.forEach((perm) => {
      const key = perm.model_name.toLowerCase();
      if (!this.groupedPermissions[key]) {
        this.groupedPermissions[key] = [];
      }
      this.groupedPermissions[key].push(perm.permission);
    });

    // Extract model names
    this.modelNames = Object.keys(this.groupedPermissions);

    // Initialize checkbox states
    this.modelNames.forEach((model) => {
      this.selectedPermissions[model] = this.groupedPermissions[model].map(() => false);
      this.selectAllMap[model] = false;
    });
  }

  toggleAll(model: string): void {
    const isChecked = this.selectAllMap[model];
    this.selectedPermissions[model].forEach((_, index) => {
      this.selectedPermissions[model][index] = isChecked;
    });
  }

  checkIfAllSelected(model: string): void {
    const allSelected = this.selectedPermissions[model].every((v) => v);
    this.selectAllMap[model] = allSelected;
  }
}
