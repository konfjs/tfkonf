import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsElastictranscoderPipelineArgsContentConfig {
  storage_class?: string;
}
export interface AwsElastictranscoderPipelineArgsContentConfigPermissions {
  access?: string[];
  grantee?: string;
  grantee_type?: string;
}
export interface AwsElastictranscoderPipelineArgsNotifications {
  completed?: string;
  error?: string;
  progressing?: string;
  warning?: string;
}
export interface AwsElastictranscoderPipelineArgsThumbnailConfig {
  storage_class?: string;
}
export interface AwsElastictranscoderPipelineArgsThumbnailConfigPermissions {
  access?: string[];
  grantee?: string;
  grantee_type?: string;
}
export interface AwsElastictranscoderPipelineArgs {
  aws_kms_key_arn?: string;
  input_bucket: string;
  role: string;
  content_config: AwsElastictranscoderPipelineArgsContentConfig;
  content_config_permissions: AwsElastictranscoderPipelineArgsContentConfigPermissions;
  notifications: AwsElastictranscoderPipelineArgsNotifications;
  thumbnail_config: AwsElastictranscoderPipelineArgsThumbnailConfig;
  thumbnail_config_permissions: AwsElastictranscoderPipelineArgsThumbnailConfigPermissions;
}
export class aws_elastictranscoder_pipeline extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly name?: string;
  readonly output_bucket?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsElastictranscoderPipelineArgs) {
    super(config, "resource", args, resourceName, "aws_elastictranscoder_pipeline");
  }
}