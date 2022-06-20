/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { TrackApplicationView } from '@kbn/usage-collection-plugin/public';
import React from 'react';
import { SecuritySolutionPageWrapper } from '../common/components/page_wrapper';
import { SpyRoute } from '../common/utils/route/spy_routes';
import { CLOUD_SECURITY_POSTURE_PATH, SecurityPageName } from '../../common/constants';
import { SecuritySubPlugin } from '../app/types';
import { useKibana } from '../common/lib/kibana';

const CloudSecurityPostureComponent = () => {
  const { cloudSecurityPosture } = useKibana().services;
  return (
    <SecuritySolutionPageWrapper noPadding>
      <SpyRoute pageName={SecurityPageName.cloudSecurityPostureFindings} />
      {cloudSecurityPosture.getFindingsComponent()}
      <br />
      <br />
      {'This chunk of text comes from the security solution'}
    </SecuritySolutionPageWrapper>
  );
};

const Memoized = React.memo(CloudSecurityPostureComponent);

const routes = () => (
  <TrackApplicationView viewId="csp">
    <Memoized />
  </TrackApplicationView>
);

export class CloudSecurityPosture {
  public setup() {}

  public start(): SecuritySubPlugin {
    return {
      routes: [
        {
          path: CLOUD_SECURITY_POSTURE_PATH,
          render: routes,
        },
      ],
    };
  }
}
