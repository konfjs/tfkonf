import { TerraformConfig, TerraformResource } from "tfs";
export interface AdvancedApiOpsConfig {
  enabled?: boolean;
}
export interface ApiSecurityConfig {
  enabled?: boolean;
}
export interface ConnectorsPlatformConfig {
  enabled?: boolean;
}
export interface IntegrationConfig {
  enabled?: boolean;
}
export interface MonetizationConfig {
  enabled?: boolean;
}
export interface AddonsConfig {
  advanced_api_ops_config: AdvancedApiOpsConfig;
  api_security_config: ApiSecurityConfig;
  connectors_platform_config: ConnectorsPlatformConfig;
  integration_config: IntegrationConfig;
  monetization_config: MonetizationConfig;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleApigeeAddonsConfigArgs {
  org: string;
  addons_config: AddonsConfig;
  timeouts: Timeouts;
}
export class google_apigee_addons_config extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleApigeeAddonsConfigArgs) {
    super(config, "resource", args, resourceName, "google_apigee_addons_config");
  }
}