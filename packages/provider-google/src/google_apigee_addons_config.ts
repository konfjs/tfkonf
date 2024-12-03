import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleApigeeAddonsConfigArgsAddonsConfigAdvancedApiOpsConfig {
  enabled?: boolean;
}
export interface GoogleApigeeAddonsConfigArgsAddonsConfigApiSecurityConfig {
  enabled?: boolean;
}
export interface GoogleApigeeAddonsConfigArgsAddonsConfigConnectorsPlatformConfig {
  enabled?: boolean;
}
export interface GoogleApigeeAddonsConfigArgsAddonsConfigIntegrationConfig {
  enabled?: boolean;
}
export interface GoogleApigeeAddonsConfigArgsAddonsConfigMonetizationConfig {
  enabled?: boolean;
}
export interface GoogleApigeeAddonsConfigArgsAddonsConfig {
  advanced_api_ops_config: GoogleApigeeAddonsConfigArgsAddonsConfigAdvancedApiOpsConfig;
  api_security_config: GoogleApigeeAddonsConfigArgsAddonsConfigApiSecurityConfig;
  connectors_platform_config: GoogleApigeeAddonsConfigArgsAddonsConfigConnectorsPlatformConfig;
  integration_config: GoogleApigeeAddonsConfigArgsAddonsConfigIntegrationConfig;
  monetization_config: GoogleApigeeAddonsConfigArgsAddonsConfigMonetizationConfig;
}
export interface GoogleApigeeAddonsConfigArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleApigeeAddonsConfigArgs {
  org: string;
  addons_config: GoogleApigeeAddonsConfigArgsAddonsConfig;
  timeouts?: GoogleApigeeAddonsConfigArgsTimeouts;
}
export class google_apigee_addons_config extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleApigeeAddonsConfigArgs) {
    super(config, "resource", args, resourceName, "google_apigee_addons_config");
  }
}