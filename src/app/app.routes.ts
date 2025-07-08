import { Routes } from '@angular/router';
import { Piefly } from './piefly/piefly';
import { Permission } from './permission/permission';
import { Procees } from './procees/procees';
import { ThreeViewer } from './three-viewer/three-viewer';
import { QrGeneratorComponent } from './qr-generate-component/qr-generate-component'; 
import { NavBar } from './nav-bar/nav-bar';


export const routes: Routes =  [
  {
    path: '',
    component: NavBar
  }

];
