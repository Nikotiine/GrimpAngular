import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../_service/token.service';
import { UserService } from '../../_service/user.service';

@Component({
  selector: 'app-u-navbar',
  templateUrl: './u-navbar.component.html',
  styleUrls: ['./u-navbar.component.scss'],
})
export class UNavbarComponent implements OnInit {
  public id: number = Number(localStorage.getItem('id'));
  admin: boolean = false;
  constructor(
    private tokenService: TokenService,
    private userService: UserService
  ) {}

  logout() {
    this.tokenService.clearToken();
    this.userService.logout();
  }
  isAdmin() {
    this.userService.getProfil(this.id).subscribe({
      next: data => (this.admin = data.admin),
      error: err => console.log(err),
    });
  }

  ngOnInit(): void {
    this.isAdmin();
  }
}
