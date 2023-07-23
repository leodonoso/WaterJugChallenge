import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProblemDataService {
  constructor() { }

  problemData: any = {}

  getUserData(data:NgForm) {
    this.problemData = data
  }

  returnData() {
    return this.problemData
  }
}
