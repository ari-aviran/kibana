/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { CLOUD_SECURITY_POSTURE_PAGES } from './constants';
import { getSecuritySolutionLinks } from './security_solution_links';
import { Chance } from 'chance';
import type { CspPage } from './types';

const chance = new Chance();

describe('getSecuritySolutionLinks', () => {
  it('gets the correct link properties', () => {
    const cspPage = chance.pickone<CspPage>(['dashboard', 'findings', 'benchmarks', 'rules']);

    const links = getSecuritySolutionLinks(cspPage);

    expect(links.id).toEqual(CLOUD_SECURITY_POSTURE_PAGES[cspPage].id);
    expect(links.path).toEqual(CLOUD_SECURITY_POSTURE_PAGES[cspPage].path);
    expect(links.title).toEqual(CLOUD_SECURITY_POSTURE_PAGES[cspPage].name);
  });

  it('de-structures extensions correctly', () => {
    const cspPage = chance.pickone<CspPage>(['dashboard', 'findings', 'benchmarks', 'rules']);
    const overwrittenTitle = chance.word();
    const extensions = {
      [CLOUD_SECURITY_POSTURE_PAGES[cspPage].id]: { title: overwrittenTitle },
    };

    const links = getSecuritySolutionLinks(cspPage, extensions);

    expect(links.id).toEqual(CLOUD_SECURITY_POSTURE_PAGES[cspPage].id);
    expect(links.path).toEqual(CLOUD_SECURITY_POSTURE_PAGES[cspPage].path);
    expect(links.title).toEqual(overwrittenTitle);
  });
});
