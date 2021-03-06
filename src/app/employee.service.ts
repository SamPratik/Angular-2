import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class EmployeeService {

  constructor(public _http: Http) {

  }
  // getEmployees() {
  //   return this._http.get('../api-data/employeedata.json')
  //             .map((response: Response) => response.json());
  // }
  getEmployees() {
    return this._http.get('api-data/employeedata.json')
      .map((response: Response) => response.json());
  }
}
