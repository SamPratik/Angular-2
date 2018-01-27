import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { EmployeeService } from './employee.service';

@Component({
  template: `
              <h2>Employee Details</h2>
              <p>The id of the employee is id = {{ employeeId }}</p>
              <a (click)="goNext()">Next</a>
              <a (click)="goPrevious()">Previuos</a><br/>
              <a (click)="goBack()">Back</a>
            `
})

export class EmployeeDetailComponent {
  employeeId: number;
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let id = parseInt(params['id']);
      this.employeeId = id;
    });
  }

  goNext() {
    if(this.employeeId == 5) {
      this.employeeId = 1;
      this.router.navigate(['/details', 1]);
    } else {
      this.router.navigate(['/details', this.employeeId + 1]);
    }
  }

  goPrevious() {
    if(this.employeeId == 1) {
      this.employeeId = 5;
      this.router.navigate(['/details', 5]);
    } else {
      this.router.navigate(['/details', this.employeeId - 1]);
    }
  }

  goBack() {
    this.router.navigate(['employees', {id: this.employeeId}]);
  }
}
