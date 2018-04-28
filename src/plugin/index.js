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
const core_1 = require("@angular-devkit/core");
const schematics_2 = require("@angular-devkit/schematics");
const core_2 = require("@angular-devkit/core");
const ng_module_utils_1 = require("../utils/ng-module-utils");
const find_module_1 = require("../angular-utils/find-module");
function filterTemplates() {
    return schematics_2.filter(path => !path.match(/\.bak$/));
}
function default_1(options) {
    return (host, context) => {
        options.path = options.path ? core_2.normalize(options.path) : options.path;
        options.module = options.module || find_module_1.findModuleFromOptions(host, options) || '';
        const templateSource = schematics_2.apply(schematics_2.url('./files'), [
            filterTemplates(),
            schematics_2.template(Object.assign({}, core_1.strings, options)),
            schematics_2.move(options.sourceDir)
        ]);
        const rule = schematics_1.chain([
            schematics_2.branchAndMerge(schematics_1.chain([
                schematics_1.mergeWith(templateSource),
                ng_module_utils_1.addImportToNgModule(options)
            ])),
        ]);
        return rule(host, context);
    };
}
exports.default = default_1;
;
//# sourceMappingURL=index.js.map