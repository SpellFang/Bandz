import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.scss']
})
export class SubmitFormComponent implements OnInit {
  isFlipped = false;
  isShowed = false;
  isLoginFormVisible = false;
  flip() {
    // flip and show back card
   this.isFlipped = !this.isFlipped;
   this.isShowed = !this.isShowed;
  }
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

}
