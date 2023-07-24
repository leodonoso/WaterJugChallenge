import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, Validators, FormControl } from '@angular/forms';
import { ProblemDataService } from '../problem-data.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {
  x: number;
  y: number;
  z: number;

  problemData: any;

  constructor(private _problemData: ProblemDataService) { }

  ngOnInit() { 
    this.problemData = this._problemData.returnData()
  }

  getData(data:NgForm) {
    // Put user data on the 'problem-data' service
    this._problemData.getUserData(data)
  }
}
