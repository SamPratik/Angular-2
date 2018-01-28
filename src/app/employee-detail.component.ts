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

      // this.router.navigate(['/employees', 1]);
      // staying in the current URL ('.') with an optional 'id' parameter
      // ({id: employeeIdNo})
      // 'this.route' will return the current URL
      this.router.navigate(['.', {id: 1}], {relativeTo: this.route})
    } else {
      // this.router.navigate(['/employees', this.employeeId + 1]);
      // staying in the current URL ('.') with an optional 'id' parameter
      // ({id: employeeIdNo})
      // 'this.route' will return the current URL
      this.router.navigate(['.', {id: (this.employeeId + 1)}], {relativeTo: this.route})
    }
  }

  goPrevious() {
    if(this.employeeId == 1) {
      this.employeeId = 5;
      // this.router.navigate(['/employees', 5]);
      // staying in the current URL ('.') with an optional 'id' parameter
      // ({id: employeeIdNo})
      // 'this.route' will return the current URL
      this.router.navigate(['.', {id: 5}], {relativeTo: this.route});
    } else {
      // this.router.navigate(['/employees', this.employeeId - 1]);
      // staying in the current URL ('.') with an optional 'id' parameter
      // ({id: employeeIdNo})
      // 'this.route' will return the current URL
      this.router.navigate(['.', {id: (this.employeeId - 1)}], {relativeTo: this.route})
    }
  }

  goBack() {

    // this.router.navigate(['employees', {id: this.employeeId}]);
    // going up from the current URL ('../') with an optional 'id' parameter
    // ({id: employeeIdNo})
    // 'this.route' will return the current URL
    this.router.navigate(['../', {id: this.employeeId}], {relativeTo: this.route})
  }
}
