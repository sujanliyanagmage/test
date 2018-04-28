/**
 * @license
 * Copyright © Zone24x7 Inc. All Rights Reserved
 *
 * Use of this source code is governed by an MIT-style license that can be found in the
 * LICENSE file at https://git.zone24x7.lk/MATRIX24x7/mx24x7-plugin-boilerplate/blob/master/LICENSE
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageOneComponent } from './page-one.component';

const PAGE_ONE_ROUTES: Routes = [
  {
    path: 'dynamic/page-one',
    component: PageOneComponent,
    canActivate: [], // Do not remove. Put your own RouteGuard if you have any.
    data: { useParentGuard: true } // Do not remove or edit.
  }
];

@NgModule({
  imports: [RouterModule.forChild(PAGE_ONE_ROUTES)],
  exports: [RouterModule]
})
export class PageOneRoutingModule {

}
