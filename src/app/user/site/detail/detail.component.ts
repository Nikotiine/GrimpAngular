import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SiteService } from '../../../_service/site.service';
import { ISite, SiteDto } from '../../../_models/i-site';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  idSpot: number = 0;

  spot?: ISite;
  constructor(
    private activatedRoute: ActivatedRoute,
    private siteService: SiteService
  ) {
    // this.spot = this.siteService.getSpotDetail(this.idSpot);
  }

  ngOnInit(): void {
    this.idSpot = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.siteService.getSpotDetail(this.idSpot).subscribe({
      next: data => {
        this.spot = data;
      },
      error: err => {
        console.log(err);
      },
    });
  }
}
