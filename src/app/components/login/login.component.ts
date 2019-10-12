// Paquete basico para un componente
import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  public title: string;
  public user: User;
  constructor(
    // tslint:disable-next-line:variable-name
    private _route: ActivatedRoute,
    // tslint:disable-next-line:variable-name
    private _router: Router,
    // tslint:disable-next-line:variable-name
    private _userService: UserService
  ) {
    this.title = 'Login';
    this.user = new User('', '', '',
      '', '', '', 'ROLE_USER');
  }

  ngOnInit() {
    console.log('Componente de login cargado');
  }
  onSubmit() {
    alert(this.user.email);
    alert(this.user.password);
    console.log(this.user);
  }

}
