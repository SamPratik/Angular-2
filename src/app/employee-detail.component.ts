import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'employee-detail',
  template: `
              <h2>Employee Details</h2>
              <p>{{ errMsg }}</p>
              <ul>
                <li *ngFor="let employee of employees">
                  {{ employee.id }}. {{ employee.name }} - {{ employee.gender }}
                </li>
              </ul>
            `
})

export class EmployeeDetailComponent {
  employees = [];
  errMsg: string;
  constructor(private employeeService: EmployeeService) {

  }
  ngOnInit() {
    this.employeeService.getEmployees()
      .subscribe(responseEmployeeData => this.employees = responseEmployeeData,
                responseEmployeeErr => this.errMsg = responseEmployeeErr);
  }
}
