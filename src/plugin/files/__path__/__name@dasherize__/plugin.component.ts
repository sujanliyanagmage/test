/**
 * @license
 * Copyright © Zone24x7 Inc. All Rights Reserved
 *
 * Use of this source code is governed by an MIT-style license that can be found in the
 * LICENSE file at https://git.zone24x7.lk/MATRIX24x7/mx24x7-plugin-boilerplate/blob/master/LICENSE
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatrixPluginsDataService } from '@matrix24x7-devkit/core';

@Component({
  selector: 'matrix-plugin',
  styleUrls: ['./plugin.component.scss'],
  templateUrl: './plugin.component.html',
  providers: []
})
export class PluginComponent implements OnInit {

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
      case 'page-one':
        this.router.navigate(['dynamic/page-one'],
          {queryParams: {id: this.agentItemID}});
        break;
      case 'page-two':
        this.router.navigate(['dynamic/page-two'],
          {queryParams: {id: this.agentItemID}});
        break;
      default:
        break;
    }
  }
}
