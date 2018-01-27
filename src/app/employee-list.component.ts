import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service'

@Component({
  selector: 'employee-list',
  template: `
              <h2>Employee List</h2>
              <p>{{ errMsg }}</p>
              <ul>
                <li *ngFor="let employee of employees">{{ employee.name }}</li>
              </ul>
            `
})

export class EmployeeListComponent {
  employees = [];
  errMsg: string;
  constructor(private employeeService: EmployeeService) {

  }
  ngOnInit() {
    this.employeeService.getEmployees()
      .subscribe(responseEmployeeData => this.employees = responseEmployeeData,
                responseEmployeeError => this.errMsg = responseEmployeeError);
  }
}
