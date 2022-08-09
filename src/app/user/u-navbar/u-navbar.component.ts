import { Component } from '@angular/core';
import { TokenService } from '../../_service/token.service';

@Component({
  selector: 'app-u-navbar',
  templateUrl: './u-navbar.component.html',
  styleUrls: ['./u-navbar.component.scss'],
})
export class UNavbarComponent {
  public id: number = Number(localStorage.getItem('id'));
  constructor(private tokenService: TokenService) {}

  logout() {
    this.tokenService.clearToken();
  }
}
