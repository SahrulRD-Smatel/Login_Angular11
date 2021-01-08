import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-pg',
  templateUrl: './info-pg.component.html',
  styleUrls: ['./info-pg.component.scss']
})
export class InfoPgComponent implements OnInit {
  inputFormData;

  constructor (private route: ActivatedRoute) {
    this.route.queryParams.subscribe (params => {
      this.inputFormData = params;
    });
  }
  
  ngOnInit(): void {
  }

}
