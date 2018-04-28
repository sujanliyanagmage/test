/**
 * @license
 * Copyright © Zone24x7 Inc. All Rights Reserved
 *
 * Use of this source code is governed by an MIT-style license that can be found in the
 * LICENSE file at https://git.zone24x7.lk/MATRIX24x7/mx24x7-plugin-boilerplate/blob/master/LICENSE
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PluginComponent } from './plugin.component';
import { PluginRoutingModule } from './plugin.routes';
import { MatrixPluginsCoreModule } from '@matrix24x7-devkit/core';
import { PageOneModule } from './page-one/page-one.module';
import { PageTwoModule } from './page-two/page-two.module';
//testing..
import { MyNewComponent2Component } from './my-new-component-2/my-new-component-2.component';

/**
 * If you are planning to use matrix authentication you can pass the
 * API end point and a DEV TOKEN to the root of the core module to be injected.
 * @type {{apiEndPoint: string; authToken: string}}
 */
const CONFIGS = {
  // Leave these values as it is if you aren't using the Matrix Rest Interceptor
  apiEndPoint: 'API_END_POINT',
  // DEV AUTH TOKEN (To be used in the development environment for testing purposes)
  authToken: 'DEV_AUTH_TOKEN'
};

@NgModule({
  imports: [
    CommonModule,
    MatrixPluginsCoreModule.forRoot(CONFIGS),
    PluginRoutingModule,
    PageOneModule,
    PageTwoModule
  ],
  declarations: [PluginComponent,MyNewComponent2Component]
})
export class PluginModule { }
