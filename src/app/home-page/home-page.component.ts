import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FlightDetailsComponent } from '../flight-details/flight-details.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  @ViewChild('component', {static: false}) component;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    const disaligRef = this.dialog.open(FlightDetailsComponent, {
      width: '250px'
    });
  }

}

