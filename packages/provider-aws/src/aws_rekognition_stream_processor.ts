import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsRekognitionStreamProcessorArgsDataSharingPreference {
  opt_in: boolean;
}
export interface AwsRekognitionStreamProcessorArgsinputKinesisVideoStream {
  arn: string;
}
export interface AwsRekognitionStreamProcessorArgsinput {
  kinesis_video_stream: AwsRekognitionStreamProcessorArgsinputKinesisVideoStream;
}
export interface AwsRekognitionStreamProcessorArgsNotificationChannel {
  sns_topic_arn?: string;
}
export interface AwsRekognitionStreamProcessorArgsoutputKinesisDataStream {
  arn?: string;
}
export interface AwsRekognitionStreamProcessorArgsoutputS3Destination {
  bucket?: string;
  key_prefix?: string;
}
export interface AwsRekognitionStreamProcessorArgsoutput {
  kinesis_data_stream: AwsRekognitionStreamProcessorArgsoutputKinesisDataStream;
  s3_destination: AwsRekognitionStreamProcessorArgsoutputS3Destination;
}
export interface AwsRekognitionStreamProcessorArgsRegionsOfInterestBoundingBox {
  height?: number;
  left?: number;
  top?: number;
  width?: number;
}
export interface AwsRekognitionStreamProcessorArgsRegionsOfInterestpolygon {
  x?: number;
  y?: number;
}
export interface AwsRekognitionStreamProcessorArgsRegionsOfInterest {
  bounding_box: AwsRekognitionStreamProcessorArgsRegionsOfInterestBoundingBox;
  polygon: AwsRekognitionStreamProcessorArgsRegionsOfInterestpolygon;
}
export interface AwsRekognitionStreamProcessorArgssettingsConnectedHome {
  labels?: string[];
}
export interface AwsRekognitionStreamProcessorArgssettingsFaceSearch {
  collection_id: string;
}
export interface AwsRekognitionStreamProcessorArgssettings {
  connected_home: AwsRekognitionStreamProcessorArgssettingsConnectedHome;
  face_search: AwsRekognitionStreamProcessorArgssettingsFaceSearch;
}
export interface AwsRekognitionStreamProcessorArgstimeouts {
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
  input: AwsRekognitionStreamProcessorArgsinput;
  notification_channel: AwsRekognitionStreamProcessorArgsNotificationChannel;
  output: AwsRekognitionStreamProcessorArgsoutput;
  regions_of_interest: AwsRekognitionStreamProcessorArgsRegionsOfInterest;
  settings: AwsRekognitionStreamProcessorArgssettings;
  timeouts: AwsRekognitionStreamProcessorArgstimeouts;
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