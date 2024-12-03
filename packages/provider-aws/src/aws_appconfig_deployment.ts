import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsAppconfigDeploymentArgs {
  application_id: string;
  configuration_profile_id: string;
  configuration_version: string;
  deployment_strategy_id: string;
  description?: string;
  environment_id: string;
  kms_key_identifier?: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_appconfig_deployment extends TerraformResource {
  readonly arn!: string;
  readonly deployment_number!: number;
  readonly id?: string;
  readonly kms_key_arn!: string;
  readonly state!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsAppconfigDeploymentArgs) {
    super(config, "resource", args, resourceName, "aws_appconfig_deployment");
  }
}