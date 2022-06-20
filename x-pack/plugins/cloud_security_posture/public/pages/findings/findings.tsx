/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */
import React from 'react';
import { QueryClientProvider } from 'react-query';
import type { UseQueryResult } from 'react-query';
import { queryClient } from '../../application/app';
import { useFindingsEsPit } from './es_pit/use_findings_es_pit';
import { FindingsEsPitContext } from './es_pit/findings_es_pit_context';
import { useLatestFindingsDataView } from '../../common/api/use_latest_findings_data_view';
import { CspPageTemplate } from '../../components/csp_page_template';
import { LatestFindingsContainer } from './latest_findings/latest_findings_container';

const FindingsBase = () => {
  const dataViewQuery = useLatestFindingsDataView();
  // TODO: Consider splitting the PIT window so that each "group by" view has its own PIT
  const { pitQuery, pitIdRef, setPitId } = useFindingsEsPit('findings');

  let queryForPageTemplate: UseQueryResult = dataViewQuery;
  if (pitQuery.isError || pitQuery.isLoading || pitQuery.isIdle) {
    queryForPageTemplate = pitQuery;
  }

  return (
    <CspPageTemplate paddingSize="none" query={queryForPageTemplate}>
      <FindingsEsPitContext.Provider
        value={{
          pitQuery,
          // Asserting the ref as a string value since at this point the query was necessarily successful
          pitIdRef: pitIdRef as React.MutableRefObject<string>,
          setPitId,
        }}
      >
        <LatestFindingsContainer dataView={dataViewQuery.data!} />
        {/* <Switch>*/}
        {/*  <Route*/}
        {/*    exact*/}
        {/*    path={allNavigationItems.findings.path}*/}
        {/*    component={() => (*/}
        {/*      <Redirect*/}
        {/*        to={{*/}
        {/*          pathname: findingsNavigation.findings_default.path,*/}
        {/*          search: location.search,*/}
        {/*        }}*/}
        {/*      />*/}
        {/*    )}*/}
        {/*  />*/}
        {/*  <Route*/}
        {/*    path={findingsNavigation.findings_default.path}*/}
        {/*    render={() => <LatestFindingsContainer dataView={dataViewQuery.data!} />}*/}
        {/*  />*/}
        {/*  <Route*/}
        {/*    path={findingsNavigation.findings_by_resource.path}*/}
        {/*    render={() => <FindingsByResourceContainer dataView={dataViewQuery.data!} />}*/}
        {/*  />*/}
        {/*  <Route*/}
        {/*    path={'*'}*/}
        {/*    component={() => <Redirect to={findingsNavigation.findings_default.path} />}*/}
        {/*  />*/}
        {/* </Switch>*/}
      </FindingsEsPitContext.Provider>
    </CspPageTemplate>
  );
};

export const Findings = () => (
  <QueryClientProvider client={queryClient}>
    <FindingsBase />
  </QueryClientProvider>
);
