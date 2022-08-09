import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit {
  codeErreur: number = 404;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.codeErreur = Number(this.activatedRoute.snapshot.paramMap.get('err'));
  }
}
