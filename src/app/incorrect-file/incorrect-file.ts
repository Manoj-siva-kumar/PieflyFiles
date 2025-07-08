import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-incorrect-file',
  imports: [],
  templateUrl: './incorrect-file.html',
  styleUrl: './incorrect-file.css'
})
export class IncorrectFile {
  constructor(private dialogRef: MatDialogRef<IncorrectFile>) {}

  closeDialog(): void {
    this.dialogRef.close({ success: true });
  }
}
