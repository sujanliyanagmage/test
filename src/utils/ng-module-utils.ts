/**
 * @license
 * Copyright © Zone24x7 Inc. All Rights Reserved
 *
 * Use of this source code is governed by an MIT-style license that can be found in the
 * LICENSE file at https://git.zone24x7.lk/MATRIX24x7/mx24x7-plugin-boilerplate/blob/master/LICENSE
 */
import { Rule, Tree, SchematicsException } from '@angular-devkit/schematics';
import { AddToModuleContext } from './add-to-module-context';
import * as ts from 'typescript';
import { strings } from '@angular-devkit/core';
// TODO: Once the library is stabilizes, remove the local references.
import { ModuleOptions, buildRelativePath } from '../angular-utils/find-module';
import { addImportToModule } from '../angular-utils/ast-utils';
import { InsertChange } from '../angular-utils/change';
/**
 * This function will add an import to the ngModule and will return the host.
 * @param {ModuleOptions} options ModuleOptions instance that describes the NgModule.
 * @returns {Rule} Modified file tree represented by the variable host.
 */
export function addImportToNgModule(options: ModuleOptions): Rule {
  return (host: Tree) => {
    addImport(host, options);
    return host;
  };
}

/**
 * Helper function that collects the context information.
 * @param {Tree} host Tree instance.
 * @param {ModuleOptions} options ModuleOptions instance that describes the NgModule.
 * @returns {AddToModuleContext}
 */
function createAddToModuleContext(host: Tree, options: ModuleOptions): AddToModuleContext {

  const result = new AddToModuleContext();

  if (!options.module) {
    throw new SchematicsException(`Module not found.`);
  }

  const text = host.read(options.module);

  if (text === null) {
    throw new SchematicsException(`File ${options.module} does not exist.`);
  }
  const sourceText = text.toString('utf-8');
  result.source = ts.createSourceFile(options.module, sourceText, ts.ScriptTarget.Latest, true);

  const pluginModulePath = `/${options.sourceDir}/${options.path}/`
    + strings.dasherize(options.name) + '/'
    + strings.dasherize(options.name)
    + '.module';

  result.relativePath = buildRelativePath(options.module, pluginModulePath);

  result.moduleName = strings.classify(`${options.name}Module`);

  return result;
}

/**
 * Delegates to addImportToModule function located inside the utils to insert an
 * import (module, route) into NgModule declarations. It also imports the module.
 * @param {Tree} host Tree instance.
 * @param {ModuleOptions} options ModuleOptions instance that describes the NgModule.
 */
function addImport(host: Tree, options: ModuleOptions) {

  const context = createAddToModuleContext(host, options);
  const modulePath = options.module || '';

  const importChanges = addImportToModule(context.source,
    modulePath,
    context.moduleName,
    context.relativePath);

  const importRecorder = host.beginUpdate(modulePath);
  for (const change of importChanges) {
    if (change instanceof InsertChange) {
      importRecorder.insertLeft(change.pos, change.toAdd);
    }
  }
  host.commitUpdate(importRecorder);
}
