/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
import { ChartsPluginSetup } from '../../../charts/public';
import { ExpressionsPublicPlugin, ExpressionsServiceStart } from '../../../expressions/public';

export type ExpressionPartitionVisPluginSetup = void;
export type ExpressionPartitionVisPluginStart = void;

export interface SetupDeps {
  expressions: ReturnType<ExpressionsPublicPlugin['setup']>;
  charts: ChartsPluginSetup;
}

export interface StartDeps {
  expression: ExpressionsServiceStart;
}
