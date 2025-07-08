import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule,FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-annoation-entry',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './annoation-entry.html',
  styleUrl: './annoation-entry.css'
})
export class AnnoationEntry {
  annotationForm!: FormGroup;

  constructor(
  private fb: FormBuilder,
  private dialogRef: MatDialogRef<AnnoationEntry> 
) {}


  ngOnInit(): void {
    this.annotationForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      confidence: [50, [Validators.required, Validators.min(0), Validators.max(100)]],
      severity: ['High'],
      description: ['']
    });
  }

  setSeverity(level: string) {
    this.annotationForm.patchValue({ severity: level });
  }

  closeDialog(): void {
    this.dialogRef.close({ success: true }); // or just `this.dialogRef.close();`
  }

  submitForm() {
    if (this.annotationForm.valid) {
      console.log(this.annotationForm.value);
      // close dialog or handle data
    }
  }
}
