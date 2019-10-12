import {Component} from '@angular/core';
<<<<<<< HEAD
=======
import {Employee} from './models/employee.model';
>>>>>>> 3f8baca1154c4653786cc45104c0b6208468c283

@Component({
  selector: 'app-erick',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
<<<<<<< HEAD
  public title: string;
  public flag: boolean;
  public heroes: [{
    name: string,
    age: number,
    list: Array<object>,
  }];
  constructor() {
    this.title = 'Hola mundo';
    this.flag = true;
  }
=======
  // Por defecto nuestros atributos son publicos
  public title = 'Mi primera App en Angular';
  public description = 'Curso de introduccion a Angular 8';
  employee: Employee;
  employeeList: any;

  constructor() {
    this.employeeList = [];
    this.employee = new Employee();
  }

  saveEmployee() {
    this.employeeList.push(this.employee);
    this.employee = new Employee();
  }


>>>>>>> 3f8baca1154c4653786cc45104c0b6208468c283
}
