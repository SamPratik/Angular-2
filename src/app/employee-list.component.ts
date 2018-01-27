import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'employee-list',
  template: `
              <h2>Employee List</h2>
              <ul>
                <li *ngFor="let employee of employees" [class.selected]="isSelected(employee)">
                  <button class="btn btn-success" (click)="onSelect(employee)">
                    <span class="badge badge-primary">{{ employee.id }}</span>{{ employee.name }}
                  </button>
                </li><br/><br/>
              </ul>
            `,
  styles: [
    `
      .selected {
        border: 1px solid red;
      }
    `
  ]
})

export class EmployeeListComponent {
  employees = [];
  selectedId: number;
  constructor(private employeeService: EmployeeService, private router: Router, private route: ActivatedRoute) {

  }
  ngOnInit() {
    this.employeeService.getEmployees()
      .subscribe(resEmployeeData => this.employees = resEmployeeData);
    this.route.params.subscribe((params: Params) => {
      this.selectedId = parseInt(params['id']);
    });
  }
  onSelect(employee) {
    this.router.navigate(['/details', employee.id]);
  }
  isSelected(employee) {
    return employee.id === this.selectedId;
  }
}
