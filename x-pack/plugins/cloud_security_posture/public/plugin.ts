/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import type { CoreSetup, CoreStart, Plugin } from '@kbn/core/public';
import type {
  CspClientPluginSetup,
  CspClientPluginStart,
  CspClientPluginSetupDeps,
  CspClientPluginStartDeps,
} from './types';

const getFindingsComponent = () =>
  'This chunk of text is coming from the cloud security posture plugin!';

export class CspPlugin
  implements
    Plugin<
      CspClientPluginSetup,
      CspClientPluginStart,
      CspClientPluginSetupDeps,
      CspClientPluginStartDeps
    >
{
  public setup(
    core: CoreSetup<CspClientPluginStartDeps, CspClientPluginStart>,
    plugins: CspClientPluginSetupDeps
  ): CspClientPluginSetup {
    // Register an application into the side navigation menu
    // core.application.register({
    //   id: PLUGIN_ID,
    //   title: PLUGIN_NAME,
    //   euiIconType: 'logoSecurity',
    //   category: DEFAULT_APP_CATEGORIES.security,
    //   async mount(params: AppMountParameters) {
    //     // Load application bundle
    //     const { renderApp } = await import('./application');
    //     // Get start services as specified in kibana.json
    //     const [coreStart, depsStart] = await core.getStartServices();
    //     // Render the application
    //     return renderApp(coreStart, depsStart, params);
    //   },
    // });

    // Return methods that should be available to other plugins
    return {};
  }
  public start(core: CoreStart, plugins: CspClientPluginStartDeps): CspClientPluginStart {
    return {
      getFindingsComponent,
    };
  }

  public stop() {}
}
