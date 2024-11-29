import { TerraformConfig, TerraformResource } from "tfs";
export interface S3 {
  bucket_name: string;
}
export interface DestinationConfiguration {
  s3: S3;
}
export interface ThumbnailConfiguration {}
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface AwsIvsRecordingConfigurationArgs {
  tags?: {
    [key: string]: string;
  };
  destination_configuration: DestinationConfiguration;
  thumbnail_configuration: ThumbnailConfiguration;
  timeouts: Timeouts;
}
export class aws_ivs_recording_configuration extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly name?: string;
  readonly recording_reconnect_window_seconds?: number;
  readonly state!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsIvsRecordingConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_ivs_recording_configuration");
  }
}