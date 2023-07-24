import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProblemDataService {
  constructor() { }

  problemData: any = {}
  isSolvable: boolean = false;
  isBestSolution: boolean = false;

  getUserData(data:NgForm) {
    this.problemData = data
  }

  returnData() {
    return this.problemData
  }

  checkIfSolvable(b: boolean) {
    this.isSolvable = b
    if (this.isSolvable) {
      console.log('This problem can be solved since isSolvable is: ', this.isSolvable)
    } else {
      console.log('This problem cannot be solved since isSolvable is: ', this.isSolvable)
    }
  }

  checkBestSolution(b: boolean) {
    this.isBestSolution = b
    if (this.isBestSolution) {
      console.log('The best solution is Solution A since isBestSolution is: ', this.isBestSolution)
    } else {
      console.log('The best solution is Solution B since isBestSolution is: ', this.isBestSolution)
    }
  }
}
