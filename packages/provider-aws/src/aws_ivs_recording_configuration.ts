import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsIvsRecordingConfigurationArgsDestinationConfigurations3 {
  bucket_name: string;
}
export interface AwsIvsRecordingConfigurationArgsDestinationConfiguration {
  s3: AwsIvsRecordingConfigurationArgsDestinationConfigurations3;
}
export interface AwsIvsRecordingConfigurationArgsThumbnailConfiguration {}
export interface AwsIvsRecordingConfigurationArgstimeouts {
  create?: string;
  delete?: string;
}
export interface AwsIvsRecordingConfigurationArgs {
  tags?: {
    [key: string]: string;
  };
  destination_configuration: AwsIvsRecordingConfigurationArgsDestinationConfiguration;
  thumbnail_configuration: AwsIvsRecordingConfigurationArgsThumbnailConfiguration;
  timeouts: AwsIvsRecordingConfigurationArgstimeouts;
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