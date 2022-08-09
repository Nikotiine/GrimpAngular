import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from '../../../_models/user.model';
import { UserService } from '../../../_service/user.service';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss'],
})
export class MeComponent implements OnInit {
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
  private id: number = 0;
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.userService.getProfil(this.id).subscribe({
      next: data => {
        this.user = data;
      },
    });
  }
}
