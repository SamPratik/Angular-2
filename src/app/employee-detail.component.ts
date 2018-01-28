import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { EmployeeService } from './employee.service';

@Component({
  template: `
              <h2>Employee Details</h2>
              <p>The id of the employee is id = {{ employeeId }} & random = {{ random }}</p>
              <a (click)="goNext()">Next</a>
              <a (click)="goPrevious()">Previuos</a><br/>
              <a (click)="goBack()">Back</a>
            `
})

export class EmployeeDetailComponent {
  employeeId: number;
  random: string;
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let id = parseInt(params['id']);
      let random = params['random'];
      this.employeeId = id;
      this.random = random;
    });
  }

  goNext() {
    if(this.employeeId == 5) {
      this.employeeId = 1;
      this.router.navigate(['/employees', 1, 'random']);
    } else {
      this.router.navigate(['/employees', (this.employeeId + 1), 'random']);
    }
  }

  goPrevious() {
    if(this.employeeId == 1) {
      this.employeeId = 5;
      this.router.navigate(['/employees', 5, 'random']);
    } else {
      this.router.navigate(['/employees', (this.employeeId - 1), 'random']);
    }
  }

  goBack() {
    this.router.navigate(['employees', {id: this.employeeId}]);
  }
}
