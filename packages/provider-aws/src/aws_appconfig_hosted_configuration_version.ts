import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsAppconfigHostedConfigurationVersionArgs {
  application_id: string;
  configuration_profile_id: string;
  content: string;
  content_type: string;
  description?: string;
}
export class aws_appconfig_hosted_configuration_version extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly version_number!: number;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAppconfigHostedConfigurationVersionArgs) {
    super(config, "resource", args, resourceName, "aws_appconfig_hosted_configuration_version");
  }
}