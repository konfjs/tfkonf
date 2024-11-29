import { TerraformConfig, TerraformResource } from "tfs";
export interface ContentConfig {
  storage_class?: string;
}
export interface ContentConfigPermissions {
  access?: string[];
  grantee?: string;
  grantee_type?: string;
}
export interface Notifications {
  completed?: string;
  error?: string;
  progressing?: string;
  warning?: string;
}
export interface ThumbnailConfig {
  storage_class?: string;
}
export interface ThumbnailConfigPermissions {
  access?: string[];
  grantee?: string;
  grantee_type?: string;
}
export interface AwsElastictranscoderPipelineArgs {
  aws_kms_key_arn?: string;
  input_bucket: string;
  role: string;
  content_config: ContentConfig;
  content_config_permissions: ContentConfigPermissions;
  notifications: Notifications;
  thumbnail_config: ThumbnailConfig;
  thumbnail_config_permissions: ThumbnailConfigPermissions;
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