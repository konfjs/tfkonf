import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsSagemakerHubArgsS3StorageConfig {
  s3_output_path?: string;
}
export interface AwsSagemakerHubArgs {
  hub_description: string;
  hub_display_name?: string;
  hub_name: string;
  hub_search_keywords?: string[];
  tags?: {
    [key: string]: string;
  };
  s3_storage_config: AwsSagemakerHubArgsS3StorageConfig;
}
export class aws_sagemaker_hub extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsSagemakerHubArgs) {
    super(config, "resource", args, resourceName, "aws_sagemaker_hub");
  }
}