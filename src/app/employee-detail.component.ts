import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from './employee.service';

@Component({
  template: `
              <h2>Employee Details</h2>
              <p>The id of the employee is id = {{ employeeId }}</p>
            `
})

export class EmployeeDetailComponent {
  employeeId: number;
  constructor(private router: ActivatedRoute) {}
  ngOnInit() {
    this.employeeId = this.router.snapshot.params['id'];
  }
}
