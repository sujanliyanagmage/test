/**
 * @license
 * Copyright © Zone24x7 Inc. All Rights Reserved
 *
 * Use of this source code is governed by an MIT-style license that can be found in the
 * LICENSE file at https://git.zone24x7.lk/MATRIX24x7/mx24x7-plugin-boilerplate/blob/master/LICENSE
 */
export interface Schema {
  /**
   * The path to create the plugin.
   */
  path: string;
  /**
   * The path of the source directory.
   */
  sourceDir: string;
  /**
   * The root of the application.
   */
  appRoot: string;
  /**
   * The name of the plugin.
   */
  name: string;
  /**
   * The path for the module file to modify.
   */
  module: string;
}
