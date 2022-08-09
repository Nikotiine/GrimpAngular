import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
})
export class TemplateComponent implements OnInit {
  public err: number = 0;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.err = Number(this.activatedRoute.snapshot.paramMap.get('err'));
  }
}
