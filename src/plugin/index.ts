/**
 * @license
 * Copyright © Zone24x7 Inc. All Rights Reserved
 *
 * Use of this source code is governed by an MIT-style license that can be found in the
 * LICENSE file at https://git.zone24x7.lk/MATRIX24x7/mx24x7-plugin-boilerplate/blob/master/LICENSE
 */
import { chain, mergeWith } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import { Schema as LogViewerOptions } from './schema';
import { apply, filter, move, Rule, template, url, branchAndMerge, Tree, SchematicContext } from '@angular-devkit/schematics';
import { normalize } from '@angular-devkit/core';
import { addImportToNgModule } from '../utils/ng-module-utils';
import { findModuleFromOptions } from '../angular-utils/find-module';

function filterTemplates(): Rule {
  return filter(path => !path.match(/\.bak$/));
}

export default function (options: LogViewerOptions): Rule {

  return (host: Tree, context: SchematicContext) => {

    options.path = options.path ? normalize(options.path) : options.path;
    options.module = options.module || findModuleFromOptions(host, options) || '';

    const templateSource = apply(url('./files'), [
      filterTemplates(),
      template({
        ...strings,
        ...options
      }),
      move(options.sourceDir)
    ]);

    const rule = chain([
      branchAndMerge(chain([
        mergeWith(templateSource),
        addImportToNgModule(options)
      ])),
    ]);

    return rule(host, context);
  };
};
