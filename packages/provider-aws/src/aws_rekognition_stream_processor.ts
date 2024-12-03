import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsRekognitionStreamProcessorArgsDataSharingPreference {
  opt_in: boolean;
}
export interface AwsRekognitionStreamProcessorArgsInputKinesisVideoStream {
  arn: string;
}
export interface AwsRekognitionStreamProcessorArgsInput {
  kinesis_video_stream: AwsRekognitionStreamProcessorArgsInputKinesisVideoStream;
}
export interface AwsRekognitionStreamProcessorArgsNotificationChannel {
  sns_topic_arn?: string;
}
export interface AwsRekognitionStreamProcessorArgsOutputKinesisDataStream {
  arn?: string;
}
export interface AwsRekognitionStreamProcessorArgsOutputS3Destination {
  bucket?: string;
  key_prefix?: string;
}
export interface AwsRekognitionStreamProcessorArgsOutput {
  kinesis_data_stream: AwsRekognitionStreamProcessorArgsOutputKinesisDataStream;
  s3_destination: AwsRekognitionStreamProcessorArgsOutputS3Destination;
}
export interface AwsRekognitionStreamProcessorArgsRegionsOfInterestBoundingBox {
  height?: number;
  left?: number;
  top?: number;
  width?: number;
}
export interface AwsRekognitionStreamProcessorArgsRegionsOfInterestPolygon {
  x?: number;
  y?: number;
}
export interface AwsRekognitionStreamProcessorArgsRegionsOfInterest {
  bounding_box: AwsRekognitionStreamProcessorArgsRegionsOfInterestBoundingBox;
  polygon: AwsRekognitionStreamProcessorArgsRegionsOfInterestPolygon;
}
export interface AwsRekognitionStreamProcessorArgsSettingsConnectedHome {
  labels?: string[];
}
export interface AwsRekognitionStreamProcessorArgsSettingsFaceSearch {
  collection_id: string;
}
export interface AwsRekognitionStreamProcessorArgsSettings {
  connected_home: AwsRekognitionStreamProcessorArgsSettingsConnectedHome;
  face_search: AwsRekognitionStreamProcessorArgsSettingsFaceSearch;
}
export interface AwsRekognitionStreamProcessorArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsRekognitionStreamProcessorArgs {
  kms_key_id?: string;
  name: string;
  role_arn: string;
  tags?: {
    [key: string]: string;
  };
  data_sharing_preference: AwsRekognitionStreamProcessorArgsDataSharingPreference;
  input: AwsRekognitionStreamProcessorArgsInput;
  notification_channel: AwsRekognitionStreamProcessorArgsNotificationChannel;
  output: AwsRekognitionStreamProcessorArgsOutput;
  regions_of_interest: AwsRekognitionStreamProcessorArgsRegionsOfInterest;
  settings: AwsRekognitionStreamProcessorArgsSettings;
  timeouts?: AwsRekognitionStreamProcessorArgsTimeouts;
}
export class aws_rekognition_stream_processor extends TerraformResource {
  readonly stream_processor_arn!: string;
  readonly tags_all!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsRekognitionStreamProcessorArgs) {
    super(config, "resource", args, resourceName, "aws_rekognition_stream_processor");
  }
}