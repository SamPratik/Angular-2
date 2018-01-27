import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'employee-list',
  template: `
              <h2>Employee List</h2>
              <ul>
                <li *ngFor="let employee of employees">
                  <button class="btn btn-success" (click)="onSelect(employee)">
                    <span class="badge badge-primary">{{ employee.id }}</span>{{ employee.name }}
                  </button>
                </li><br/><br/>
              </ul>
            `
})

export class EmployeeListComponent {
  employees = [];
  constructor(private employeeService: EmployeeService, private router: Router) {

  }
  ngOnInit() {
    this.employeeService.getEmployees()
      .subscribe(resEmployeeData => this.employees = resEmployeeData);
  }
  onSelect(employee) {
    this.router.navigate(['/details', employee.id]);
  }
}
