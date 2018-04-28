/**
 * @license
 * Copyright © Zone24x7 Inc. All Rights Reserved
 *
 * Use of this source code is governed by an MIT-style license that can be found in the
 * LICENSE file at https://git.zone24x7.lk/MATRIX24x7/mx24x7-plugin-boilerplate/blob/master/LICENSE
 */
import * as ts from 'typescript';
/**
 * Gets a context class holding data for the planned modifications.
 */
export class AddToModuleContext {
  /**
   * The source of the module file.
   */
  source: ts.SourceFile;
  /**
   * The relative path that points from the source
   * module file to the plugin's  module file.
   */
  relativePath: string;
  /**
   * Name of the plugin's module file.
   */
  moduleName: string;
}
