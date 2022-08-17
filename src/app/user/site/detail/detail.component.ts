import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SiteService } from '../../../_service/site.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  idSpot: number = 0;
  constructor(
    private activatedRoute: ActivatedRoute,
    private siteService: SiteService
  ) {}

  ngOnInit(): void {
    this.idSpot = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.siteService.getSpotDetail(this.idSpot).subscribe({
      next: data => {
        console.log(data);
      },
      error: err => {
        console.log(err);
      },
    });
  }
}
