"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright © Zone24x7 Inc. All Rights Reserved
 *
 * Use of this source code is governed by an MIT-style license that can be found in the
 * LICENSE file at https://git.zone24x7.lk/MATRIX24x7/mx24x7-plugin-boilerplate/blob/master/LICENSE
 */
const schematics_1 = require("@angular-devkit/schematics");
const add_to_module_context_1 = require("./add-to-module-context");
const ts = require("typescript");
const core_1 = require("@angular-devkit/core");
// TODO: Once the library is stabilizes, remove the local references.
const find_module_1 = require("../angular-utils/find-module");
const ast_utils_1 = require("../angular-utils/ast-utils");
const change_1 = require("../angular-utils/change");
/**
 * This function will add an import to the ngModule and will return the host.
 * @param {ModuleOptions} options ModuleOptions instance that describes the NgModule.
 * @returns {Rule} Modified file tree represented by the variable host.
 */
function addImportToNgModule(options) {
    return (host) => {
        addImport(host, options);
        return host;
    };
}
exports.addImportToNgModule = addImportToNgModule;
/**
 * Helper function that collects the context information.
 * @param {Tree} host Tree instance.
 * @param {ModuleOptions} options ModuleOptions instance that describes the NgModule.
 * @returns {AddToModuleContext}
 */
function createAddToModuleContext(host, options) {
    const result = new add_to_module_context_1.AddToModuleContext();
    if (!options.module) {
        throw new schematics_1.SchematicsException(`Module not found.`);
    }
    const text = host.read(options.module);
    if (text === null) {
        throw new schematics_1.SchematicsException(`File ${options.module} does not exist.`);
    }
    const sourceText = text.toString('utf-8');
    result.source = ts.createSourceFile(options.module, sourceText, ts.ScriptTarget.Latest, true);
    const pluginModulePath = `/${options.sourceDir}/${options.path}/`
        + core_1.strings.dasherize(options.name) + '/'
        + core_1.strings.dasherize(options.name)
        + '.module';
    result.relativePath = find_module_1.buildRelativePath(options.module, pluginModulePath);
    result.moduleName = core_1.strings.classify(`${options.name}Module`);
    return result;
}
/**
 * Delegates to addImportToModule function located inside the utils to insert an
 * import (module, route) into NgModule declarations. It also imports the module.
 * @param {Tree} host Tree instance.
 * @param {ModuleOptions} options ModuleOptions instance that describes the NgModule.
 */
function addImport(host, options) {
    const context = createAddToModuleContext(host, options);
    const modulePath = options.module || '';
    const importChanges = ast_utils_1.addImportToModule(context.source, modulePath, context.moduleName, context.relativePath);
    const importRecorder = host.beginUpdate(modulePath);
    for (const change of importChanges) {
        if (change instanceof change_1.InsertChange) {
            importRecorder.insertLeft(change.pos, change.toAdd);
        }
    }
    host.commitUpdate(importRecorder);
}
//# sourceMappingURL=ng-module-utils.js.map