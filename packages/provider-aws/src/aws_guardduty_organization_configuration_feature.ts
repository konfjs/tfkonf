import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsGuarddutyOrganizationConfigurationFeatureArgsAdditionalConfiguration {
  auto_enable: string;
  name: string;
}
export interface AwsGuarddutyOrganizationConfigurationFeatureArgs {
  auto_enable: string;
  detector_id: string;
  name: string;
  additional_configuration: AwsGuarddutyOrganizationConfigurationFeatureArgsAdditionalConfiguration;
}
export class aws_guardduty_organization_configuration_feature extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsGuarddutyOrganizationConfigurationFeatureArgs) {
    super(config, "resource", args, resourceName, "aws_guardduty_organization_configuration_feature");
  }
}