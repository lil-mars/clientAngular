import { Component, OnInit } from '@angular/core';
import {Employee} from '../models/employee.model';
import {Person} from '../models/person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  person: Person;
  personList: any;
  constructor() {
    this.person = new Employee();
    this.personList = [];
  }

  saveEmployee() {
    this.personList.push(this.person);
    this.person = new Employee();
  }

  getEmployees() {
    return this.personList;
  }

  ngOnInit() {
  }

}
