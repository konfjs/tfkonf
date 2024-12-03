import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsDatazoneEnvironmentBlueprintConfigurationArgs {
  domain_id: string;
  enabled_regions: string[];
  environment_blueprint_id: string;
  manage_access_role_arn?: string;
  provisioning_role_arn?: string;
  regional_parameters?: {
    [key: string]: any;
  };
}
export class aws_datazone_environment_blueprint_configuration extends TerraformResource {
  constructor(config: TerraformConfig, resourceName: string, args: AwsDatazoneEnvironmentBlueprintConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_datazone_environment_blueprint_configuration");
  }
}