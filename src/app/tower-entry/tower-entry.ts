import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-tower-entry',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './tower-entry.html',
})
export class TowerEntry {

  towerForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<TowerEntry>,
    @Inject(MAT_DIALOG_DATA) public data: any  // Receive data here
  ) {
    // Optional: initialize form with passed data (for edit mode)
    const tower = data?.tower;

    this.towerForm = new FormGroup({
      name: new FormControl(tower?.tower_name || '', Validators.required),
      type: new FormControl(tower?.type_no || '', Validators.required),
      latitude: new FormControl(tower?.latitude || '', Validators.required),
      longitude: new FormControl(tower?.longitude || '', Validators.required),
      locationName: new FormControl(tower?.location || '', Validators.required)
    });
  }

  onSubmit() {
    if (this.towerForm.valid) {
      this.dialogRef.close({ success: true, data: this.towerForm.value });
    } else {
      this.towerForm.markAllAsTouched();
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
