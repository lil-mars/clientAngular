import {Component, OnInit} from '@angular/core';
import {Employee} from "../models/employee.model";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee: Employee;
  employeeList: any;

  constructor() {
    this.employee = new Employee();
    this.employeeList = [];
  }

  saveEmployee() {
    console.log(this.employee);
    this.employeeList.push(this.employee);
    this.employee = new Employee();
  }

  getEmployees() {
    return this.employeeList;
  }

  ngOnInit() {
  }

}
