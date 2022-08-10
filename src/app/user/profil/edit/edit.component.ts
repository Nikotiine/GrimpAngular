import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EditCredential, IUser } from '../../../_models/user.model';
import { UserService } from '../../../_service/user.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  private id: number = 0;
  private redirectUrl: string = '/user/profil/';
  editFrom: FormGroup;
  user: IUser = {
    birthday: '',
    email: '',
    firstName: '',
    lastName: '',
    nickName: '',
    sex: '',
  };
  userBirthday: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private datePipe: DatePipe,
    private router: Router
  ) {
    this.editFrom = new FormGroup({
      nickName: new FormControl(this.user.nickName, [
        Validators.required,
        Validators.max(50),
      ]),
      lastName: new FormControl(this.user.lastName, Validators.required),
      firstName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      birthday: new FormControl('', Validators.required),
      sex: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.userService.getProfil(this.id).subscribe({
      next: data => {
        this.user = data;
        console.log(data);
        this.userBirthday = this.datePipe.transform(
          data.birthday,
          'yyyy-MM-dd'
        );
        console.log(this.user.sex);
      },
      error: err => {
        console.log(err);
      },
    });
  }

  editProfil(): any {
    const credentials: EditCredential = new EditCredential(
      this.id,
      this.editFrom.controls['nickName'].value,
      this.editFrom.controls['lastName'].value,
      this.editFrom.controls['firstName'].value,
      this.editFrom.controls['email'].value,
      this.editFrom.controls['birthday'].value,
      this.editFrom.controls['sex'].value
    );
    console.log(credentials);
    this.userService.editProfil(this.id, credentials).subscribe({
      next: data => {
        this.router.navigate([this.redirectUrl + data.idUser]);
      },
      error: err => {
        console.log(err);
      },
    });
  }
}
