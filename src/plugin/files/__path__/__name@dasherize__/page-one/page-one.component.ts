/**
 * @license
 * Copyright © Zone24x7 Inc. All Rights Reserved
 *
 * Use of this source code is governed by an MIT-style license that can be found in the
 * LICENSE file at https://git.zone24x7.lk/MATRIX24x7/mx24x7-plugin-boilerplate/blob/master/LICENSE
 */
import { Component, OnInit } from '@angular/core';
import { MatrixPluginsDataService } from '@matrix24x7-devkit/core';
import { Router } from '@angular/router';

@Component({
  selector: 'page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit {

  private agentItemID: number;

  constructor(private router: Router,
              private matrixPluginsDataService: MatrixPluginsDataService) {
    this.agentItemID = 0;
  }

  ngOnInit() {
    this.agentItemID = this.matrixPluginsDataService.getAgentItemID();
  }

  public navigate(page: string) {
    switch (page) {
      case 'dynamic':
        this.router.navigate(['dynamic'],
          {queryParams: {id: this.agentItemID}});
        break;
      default:
        break;
    }
  }
}
