import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../_service/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IChangePsw } from '../../../_models/i-change-psw';
import { TokenService } from '../../../_service/token.service';

@Component({
  selector: 'app-change-psw',
  templateUrl: './change-psw.component.html',
  styleUrls: ['./change-psw.component.scss'],
})
export class ChangePswComponent implements OnInit {
  changePswForm: FormGroup;
  public id: number = 0;
  public requestError: boolean = false;
  public messageError: string = '';
  public requestValide: boolean = false;
  public messageRequestValide: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private tokenService: TokenService
  ) {
    this.changePswForm = new FormGroup({
      oldPassword: new FormControl('', Validators.required),
      newPassword: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }
  onSubmit($event: any): void {
    $event.preventDefault();
    const credential: IChangePsw = {
      oldPassword: this.changePswForm.controls['oldPassword'].value,
      newPassword: this.changePswForm.controls['newPassword'].value,
    };
    console.log(credential);
    this.userService.changePsw(this.id, credential).subscribe({
      next: data => {
        this.requestValide = true;
        this.messageRequestValide = data.data;
        this.tokenService.clearToken();
        setTimeout(() => {
          this.userService.login();
        }, 2500);
      },
      error: err => {
        this.requestError = true;
        this.messageError = err.error;
        setTimeout(() => {
          this.requestError = false;
        }, 2500);
      },
    });
  }
}
