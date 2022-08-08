import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../_service/user.service';
import { IUser, User } from '../../../_models/user.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  user: IUser = {
    admin: false,
    birthday: '',
    email: '',
    firstName: '',
    idUser: 0,
    lastName: '',
    nickName: '',
    password: '',
    sex: '',
  };
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getProfil().subscribe({
      next: data => {
        this.user = data;
      },
    });
  }
}
