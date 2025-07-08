import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TowerEntry } from '../tower-entry/tower-entry';
import { tower, towerData } from './piefly.model';
import { FileUpload } from '../file-upload/file-upload';

@Component({
  selector: 'app-piefly',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './piefly.html',
  styleUrls: ['./piefly.css']
})
export class Piefly {

  public towerData = towerData;
  constructor(private readonly matDialog: MatDialog) { }

  public openTowerEnterDilog(): void {

    const dialogRef = this.matDialog.open(TowerEntry, {
      width: '60vw',
      maxWidth: '60vw',
      panelClass: 'custom-dialog-container'  // Optional: for rounded corners
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.success) {
        // this.fetchFolderLists(this.filterParams);
      }
    });
  }


  public openTowerEditDilog(selectedTower: tower): void {
    const dialogRef = this.matDialog.open(TowerEntry, {
      width: '60vw',
      maxWidth: '60vw',
      data: {
        tower: selectedTower,
      },
      panelClass: 'custom-dialog-container'  // Optional: for rounded corners
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.success) {
        // this.fetchFolderLists(this.filterParams);
      }
    });
  }

 public loadFile(): void {

    const dialogRef = this.matDialog.open(FileUpload, {
      width: '60vw',
      maxWidth: '70vw',
      panelClass: 'custom-dialog-container'  // Optional: for rounded corners
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.success) {
        // this.fetchFolderLists(this.filterParams);
      }
    });
  }
}
