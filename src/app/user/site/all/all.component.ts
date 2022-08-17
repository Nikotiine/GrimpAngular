import { Component, OnInit } from '@angular/core';
import { SiteService } from '../../../_service/site.service';
import { ISite } from '../../../_models/i-site';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss'],
})
export class AllComponent implements OnInit {
  listeDesSites: ISite[] = [];
  constructor(private siteService: SiteService) {}

  ngOnInit(): void {
    this.siteService.getAllSite().subscribe({
      next: data => {
        this.listeDesSites = data;
      },
      error: err => {
        console.log(err);
      },
    });
  }
}
