/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

const alwaysImportedTests = [
  require.resolve('../test/functional/config.js'),
  require.resolve('../test/functional_basic/config.ts'),
  require.resolve('../test/security_solution_endpoint/config.ts'),
  require.resolve('../test/plugin_functional/config.ts'),
  require.resolve('../test/functional_with_es_ssl/config.ts'),
  require.resolve('../test/functional/config_security_basic.ts'),
  require.resolve('../test/reporting_functional/reporting_and_security.config.ts'),
  require.resolve('../test/reporting_functional/reporting_without_security.config.ts'),
  require.resolve('../test/reporting_functional/reporting_and_deprecated_security.config.ts'),
  require.resolve('../test/security_functional/login_selector.config.ts'),
  require.resolve('../test/security_functional/oidc.config.ts'),
  require.resolve('../test/security_functional/saml.config.ts'),
  require.resolve('../test/functional_embedded/config.ts'),
  require.resolve('../test/functional_cors/config.ts'),
  require.resolve('../test/functional_enterprise_search/without_host_configured.config.ts'),
  require.resolve('../test/saved_object_tagging/functional/config.ts'),
  require.resolve('../test/usage_collection/config.ts'),
  require.resolve('../test/fleet_functional/config.ts'),
  require.resolve('../test/functional_synthetics/config.js'),
  require.resolve('../test/api_integration/config_security_basic.ts'),
  require.resolve('../test/api_integration/config_security_trial.ts'),
  require.resolve('../test/api_integration/config.ts'),
  require.resolve('../test/api_integration_basic/config.ts'),
  require.resolve('../test/alerting_api_integration/basic/config.ts'),
  require.resolve('../test/alerting_api_integration/spaces_only/config.ts'),
  require.resolve('../test/alerting_api_integration/security_and_spaces/config.ts'),
  require.resolve('../test/cases_api_integration/security_and_spaces/config_basic.ts'),
  require.resolve('../test/cases_api_integration/security_and_spaces/config_trial.ts'),
  require.resolve('../test/cases_api_integration/spaces_only/config.ts'),
  require.resolve('../test/apm_api_integration/basic/config.ts'),
  require.resolve('../test/apm_api_integration/trial/config.ts'),
  require.resolve('../test/apm_api_integration/rules/config.ts'),
  require.resolve('../test/detection_engine_api_integration/security_and_spaces/config.ts'),
  require.resolve('../test/detection_engine_api_integration/basic/config.ts'),
  require.resolve('../test/lists_api_integration/security_and_spaces/config.ts'),
  require.resolve('../test/plugin_api_integration/config.ts'),
  require.resolve('../test/rule_registry/security_and_spaces/config_basic.ts'),
  require.resolve('../test/rule_registry/security_and_spaces/config_trial.ts'),
  require.resolve('../test/rule_registry/spaces_only/config_basic.ts'),
  require.resolve('../test/rule_registry/spaces_only/config_trial.ts'),
  require.resolve('../test/security_api_integration/saml.config.ts'),
  require.resolve('../test/security_api_integration/session_idle.config.ts'),
  require.resolve('../test/security_api_integration/session_invalidate.config.ts'),
  require.resolve('../test/security_api_integration/session_lifespan.config.ts'),
  require.resolve('../test/security_api_integration/login_selector.config.ts'),
  require.resolve('../test/security_api_integration/audit.config.ts'),
  require.resolve('../test/security_api_integration/http_bearer.config.ts'),
  require.resolve('../test/security_api_integration/http_no_auth_providers.config.ts'),
  require.resolve('../test/security_api_integration/kerberos.config.ts'),
  require.resolve('../test/security_api_integration/kerberos_anonymous_access.config.ts'),
  require.resolve('../test/security_api_integration/pki.config.ts'),
  require.resolve('../test/security_api_integration/oidc.config.ts'),
  require.resolve('../test/security_api_integration/oidc_implicit_flow.config.ts'),
  require.resolve('../test/security_api_integration/token.config.ts'),
  require.resolve('../test/security_api_integration/anonymous.config.ts'),
  require.resolve('../test/security_api_integration/anonymous_es_anonymous.config.ts'),
  require.resolve('../test/observability_api_integration/basic/config.ts'),
  require.resolve('../test/observability_api_integration/trial/config.ts'),
  require.resolve('../test/observability_functional/with_rac_write.config.ts'),
  require.resolve('../test/encrypted_saved_objects_api_integration/config.ts'),
  require.resolve('../test/spaces_api_integration/spaces_only/config.ts'),
  require.resolve('../test/spaces_api_integration/security_and_spaces/config_trial.ts'),
  require.resolve('../test/spaces_api_integration/security_and_spaces/config_basic.ts'),
  require.resolve('../test/saved_object_api_integration/security_and_spaces/config_trial.ts'),
  require.resolve('../test/saved_object_api_integration/security_and_spaces/config_basic.ts'),
  require.resolve('../test/saved_object_api_integration/spaces_only/config.ts'),
  // TODO: Enable once RBAC timeline search strategy
  // tests updated
  // require.resolve('../test/timeline/security_and_spaces/config_basic.ts'),
  require.resolve('../test/timeline/security_and_spaces/config_trial.ts'),
  require.resolve('../test/ui_capabilities/security_and_spaces/config.ts'),
  require.resolve('../test/ui_capabilities/spaces_only/config.ts'),
  require.resolve('../test/upgrade_assistant_integration/config.js'),
  require.resolve('../test/licensing_plugin/config.ts'),
  require.resolve('../test/licensing_plugin/config.public.ts'),
  require.resolve('../test/endpoint_api_integration_no_ingest/config.ts'),
  require.resolve('../test/reporting_api_integration/reporting_and_security.config.ts'),
  require.resolve('../test/reporting_api_integration/reporting_without_security.config.ts'),
  require.resolve('../test/security_solution_endpoint_api_int/config.ts'),
  require.resolve('../test/fleet_api_integration/config.ts'),
  require.resolve('../test/search_sessions_integration/config.ts'),
  require.resolve('../test/saved_object_tagging/api_integration/security_and_spaces/config.ts'),
  require.resolve('../test/saved_object_tagging/api_integration/tagging_api/config.ts'),
  require.resolve('../test/examples/config.ts'),
  require.resolve('../test/functional_execution_context/config.ts'),
];
const onlyNotInCoverageTests = [];

require('../../src/setup_node_env');
require('@kbn/test').runTestsCli([
  ...alwaysImportedTests,
  ...(!!process.env.CODE_COVERAGE ? [] : onlyNotInCoverageTests),
]);
