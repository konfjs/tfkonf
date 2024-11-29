import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsMskconnectCustomPluginArgsLocationS3 {
  bucket_arn: string;
  file_key: string;
  object_version?: string;
}
export interface AwsMskconnectCustomPluginArgsLocation {
  s3: AwsMskconnectCustomPluginArgsLocationS3;
}
export interface AwsMskconnectCustomPluginArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface AwsMskconnectCustomPluginArgs {
  content_type: string;
  description?: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  location: AwsMskconnectCustomPluginArgsLocation;
  timeouts: AwsMskconnectCustomPluginArgsTimeouts;
}
export class aws_mskconnect_custom_plugin extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly latest_revision!: number;
  readonly state!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsMskconnectCustomPluginArgs) {
    super(config, "resource", args, resourceName, "aws_mskconnect_custom_plugin");
  }
}