import { Component, OnInit } from '@angular/core';
import { ProblemDataService } from '../problem-data.service';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})

export class SolutionComponent implements OnInit {
  constructor(private _problemData: ProblemDataService) {  }

  bestSolution: boolean = false;
  solvable: boolean = false;
  bestSolutionSteps: number = 0;

  // Extended Euclidean Algorithm to find the Greatest Common Divisor between 2 numbers.
  gcd(a: number, b: number): number {
    if (b == 0)
        return a;

      return this.gcd(b, a % b);
    }
  
  // Function to calculate the solution
  solve(fromCap: number, toCap: number, d: number)
    {
        // Initialize current amount of water
        // in source and destination jugs
        let from = fromCap;
        let to = 0;
 
        // Initialize count of steps required
        let step = 1; // Needed to fill "from" Jug
 
        // Break the loop when either of the two
        // jugs has d gallons water
        while (from != d && to != d) {
 
            // Find the maximum amount that can be
            // poured
            let temp = Math.min(from, toCap - to);
 
            // Pour "temp" gallons from "from" to "to"
            to += temp;
            from -= temp;
 
            // Increment count of steps
            step++;
 
            if (from == d || to == d)
                break;
 
            // If first jug becomes empty, fill it
            if (from == 0) {
                from = fromCap;
                step++;
            }
 
            // If second jug becomes full, empty it
            if (to == toCap) {
                to = 0;
                step++;
            }
        }
        return step;
    }
  
    // Returns count of minimum steps needed to
    // measure d gallons
    minSteps(m: number, n: number, d: number) {
      // For d > n we cant measure the water
      // using the jugs
      if (d > n)
          return -1;

      // If gcd of n and m does not divide d
      // then solution is not possible
      if ((d % this.gcd(n, m)) != 0)
          return -1;

      // Return minimum two cases:
      // a) Water of n (biggest) gallons jug is poured into
      // m (smallest) gallons jug
      // b) Water of m (smallest) gallons jug is poured into
      // n (biggest) gallons jug

      // Checks which solution is most efficient
      let solutionA: number = this.solve(n, m, d) // n to m
      let solutionB: number = this.solve(m, n, d) // m to n

      console.log(`Solution A: ${solutionA}. Solution B: ${solutionB}`)
      // Minimum number of steps
      let bestSolutionSteps: number = Math.min(solutionA, solutionB)

      if (bestSolutionSteps === solutionA) this.bestSolution = true;
      else if (bestSolutionSteps === solutionB) this.bestSolution = false; 

      return bestSolutionSteps;
  }

  n: number;
  m: number;
  d: number;
  problemData: any;
  isSolvable: boolean;
  isBestSolution: boolean;

  ngOnInit() {
    this.problemData = this._problemData.returnData()
    
    let n = this.problemData.x;
    let m = this.problemData.y;
    let d = this.problemData.z;
    
    // To make sure that m is smaller than n
    if (m > n) {
      let t = m;
      m = n;
      n = t;
    }

    console.log(`m: ${m}, n: ${n}, d: ${d}`)

    if (this.minSteps(m, n, d) !== -1) {
      this.solvable = true;
      this.bestSolutionSteps = this.minSteps(m, n, d)

      this._problemData.checkBestSolution(this.bestSolution)
      this._problemData.checkIfSolvable(this.solvable)
    }

    console.log("Minimum number of "
    + "steps required is " + this.minSteps(m, n, d));

    this.isBestSolution = this._problemData.isBestSolution;
    this.isSolvable = this._problemData.isSolvable;
    this.n = n;
    this.m = m;
    this.d = d;
  }
}
