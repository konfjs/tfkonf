import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsIvsRecordingConfigurationArgsDestinationConfigurationS3 {
  bucket_name: string;
}
export interface AwsIvsRecordingConfigurationArgsDestinationConfiguration {
  s3: AwsIvsRecordingConfigurationArgsDestinationConfigurationS3;
}
export interface AwsIvsRecordingConfigurationArgsThumbnailConfiguration {}
export interface AwsIvsRecordingConfigurationArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface AwsIvsRecordingConfigurationArgs {
  tags?: {
    [key: string]: string;
  };
  destination_configuration: AwsIvsRecordingConfigurationArgsDestinationConfiguration;
  thumbnail_configuration: AwsIvsRecordingConfigurationArgsThumbnailConfiguration;
  timeouts?: AwsIvsRecordingConfigurationArgsTimeouts;
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