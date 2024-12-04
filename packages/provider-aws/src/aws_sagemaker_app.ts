import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSagemakerAppArgsResourceSpec {
  instance_type?: string;
  lifecycle_config_arn?: string;
  sagemaker_image_version_alias?: string;
  sagemaker_image_version_arn?: string;
}

export interface AwsSagemakerAppArgs {
  app_name: string;
  app_type: string;
  domain_id: string;
  space_name?: string;
  tags?: { [key: string]: string };
  user_profile_name?: string;
  resource_spec: AwsSagemakerAppArgsResourceSpec;
}

export class aws_sagemaker_app extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsSagemakerAppArgs) {
    super(config, "resource", args, resourceName, "aws_sagemaker_app");
  }
}
