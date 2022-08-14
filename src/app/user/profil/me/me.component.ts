import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../_models/user.model';
import { UserService } from '../../../_service/user.service';
import { ErrorService } from '../../../_service/error.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss'],
})
export class MeComponent implements OnInit {
  user: User = {
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
  public requestError: boolean = false;
  public messageError: string = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private errorService: ErrorService
  ) {}

  ngOnInit(): void {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.userService.getProfil(this.id).subscribe({
      next: data => {
        this.user = data;
      },
      error: err => {
        this.requestError = true;
        this.messageError = err.statusText;
        setTimeout(() => {
          this.errorService.error(err.status);
        }, 2000);
      },
    });
  }
}
