import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.html',
  styleUrls: ['./file-upload.css'] 
})
export class FileUpload {
  constructor(public dialogRef: MatDialogRef<FileUpload>) {} 

  close(): void {
    this.dialogRef.close();
  }
}
