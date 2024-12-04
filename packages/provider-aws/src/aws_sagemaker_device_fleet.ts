import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSagemakerDeviceFleetArgsOutputConfig {
  kms_key_id?: string;
  s3_output_location: string;
}

export interface AwsSagemakerDeviceFleetArgs {
  description?: string;
  device_fleet_name: string;
  enable_iot_role_alias?: boolean;
  role_arn: string;
  tags?: { [key: string]: string };
  output_config: AwsSagemakerDeviceFleetArgsOutputConfig;
}

export class aws_sagemaker_device_fleet extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly iot_role_alias!: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsSagemakerDeviceFleetArgs) {
    super(config, "resource", args, resourceName, "aws_sagemaker_device_fleet");
  }
}
