import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { defectList, Defect } from './qr-generate-component.model';
import { MatDialog } from '@angular/material/dialog';
import { IncorrectFile } from '../incorrect-file/incorrect-file';
import { AnnoationEntry } from '../annoation-entry/annoation-entry';

@Component({
  selector: 'app-qr-generate',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './qr-generate-component.html',
  styleUrls: ['./qr-generate-component.css'] // ✅ fixed plural
})
export class QrGeneratorComponent implements OnInit {

  public imageUrl: string = 'assets/Detect.png';
  public latitude: number = 22.469648;
  public longitude: number = 88.318095;
  public altitude: number = 93.355095;

  public defectList: Defect[] = []; // ✅ proper typing

  constructor(private readonly matDialog: MatDialog) {
    this.defectList = defectList;
  }

  ngOnInit(): void { }

  incorrect() {
    const dialogRef = this.matDialog.open(IncorrectFile, {
      width: '38vw',
      maxWidth: '38vw',
      panelClass: 'rounded-dialog'
    });

    

    dialogRef.afterClosed().subscribe(result => {
      if (result?.success) {
        // this.fetchFolderLists(this.filterParams);
      }
    });
  }

  add() {
    const dialogRef = this.matDialog.open(AnnoationEntry, {
      width: '40vw',
      maxWidth: '40vw',
      panelClass: 'rounded-dialog'
    });

    

    dialogRef.afterClosed().subscribe(result => {
      if (result?.success) {
        // this.fetchFolderLists(this.filterParams);
      }
    });
  }
  

  editDefect(defect: Defect): void {
    console.log('Delete defect:', defect);
  }
  deleteDefect(defect: Defect): void {
    console.log('Delete defect:', defect);
  }
}



