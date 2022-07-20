/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { CLOUD_SECURITY_POSTURE_PAGES } from './constants';
import type { CloudSecurityPosturePageId, CspPage } from './types';

interface BaseLinkItem {
  id: string;
  title: string;
  path: string;
  links?: BaseLinkItem[];
}

type SecuritySolutionLinkExtensions<TLinkItem extends BaseLinkItem> = Partial<
  Record<CloudSecurityPosturePageId, Partial<TLinkItem>>
>;

export const getSecuritySolutionLinks = <TLinkItem extends BaseLinkItem = BaseLinkItem>(
  cspPage: CspPage,
  extensions?: SecuritySolutionLinkExtensions<TLinkItem>
): TLinkItem =>
  ({
    id: CLOUD_SECURITY_POSTURE_PAGES[cspPage].id,
    title: CLOUD_SECURITY_POSTURE_PAGES[cspPage].name,
    path: CLOUD_SECURITY_POSTURE_PAGES[cspPage].path,
    ...(extensions?.[CLOUD_SECURITY_POSTURE_PAGES[cspPage].id] ?? {}),
  } as TLinkItem);

/**
 * Gets the cloud security posture links for top-level navigation in the security solution.
 * @param extensions extended configuration for the links.
 */
export const getSecuritySolutionRootLinks = <TLinkItem extends BaseLinkItem = BaseLinkItem>(
  extensions?: SecuritySolutionLinkExtensions<TLinkItem>
): TLinkItem => getSecuritySolutionLinks('findings', extensions);

/**
 * Gets the cloud security posture links for navigation in the security solution's "Dashboards" section.
 * @param extensions extended configuration for the links.
 */
export const getSecuritySolutionDashboardLinks = <TLinkItem extends BaseLinkItem = BaseLinkItem>(
  extensions?: SecuritySolutionLinkExtensions<TLinkItem>
): TLinkItem => getSecuritySolutionLinks('dashboard', extensions);

/**
 * Gets the cloud security posture links for navigation in the security solution's "Manage" section.
 * @param extensions extended configuration for the links.
 */
export const getSecuritySolutionManageLinks = <TLinkItem extends BaseLinkItem = BaseLinkItem>(
  extensions?: SecuritySolutionLinkExtensions<TLinkItem>
): TLinkItem => {
  const manageLinks = getSecuritySolutionLinks('benchmarks', extensions);
  manageLinks.links = [getSecuritySolutionLinks('rules', extensions)];
  return manageLinks;
};
