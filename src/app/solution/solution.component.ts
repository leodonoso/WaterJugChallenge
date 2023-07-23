import { Component, OnInit } from '@angular/core';
import { ProblemDataService } from '../problem-data.service';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit {
  constructor(private _problemData: ProblemDataService) {}

  problemData: any;

  ngOnInit() {
    this.problemData = this._problemData.returnData()
  }
}
