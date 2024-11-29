import { TerraformConfig, TerraformResource } from "tfs";
export interface OrganizationConfiguration {
  configuration_type: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsSecurityhubOrganizationConfigurationArgs {
  auto_enable: boolean;
  organization_configuration: OrganizationConfiguration;
  timeouts: Timeouts;
}
export class aws_securityhub_organization_configuration extends TerraformResource {
  readonly auto_enable_standards?: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSecurityhubOrganizationConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_securityhub_organization_configuration");
  }
}