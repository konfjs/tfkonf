import { TerraformConfig, TerraformResource } from "tfs";
export interface S3 {
  bucket_arn: string;
  file_key: string;
  object_version?: string;
}
export interface Location {
  s3: S3;
}
export interface Timeouts {
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
  location: Location;
  timeouts: Timeouts;
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