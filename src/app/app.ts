import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Piefly } from './piefly/piefly';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink,Piefly],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Project';
}
