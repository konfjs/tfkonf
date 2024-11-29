import { TerraformConfig, TerraformResource } from "tfs";
export interface DataSharingPreference {
  opt_in: boolean;
}
export interface KinesisVideoStream {
  arn: string;
}
export interface Input {
  kinesis_video_stream: KinesisVideoStream;
}
export interface NotificationChannel {
  sns_topic_arn?: string;
}
export interface KinesisDataStream {
  arn?: string;
}
export interface S3Destination {
  bucket?: string;
  key_prefix?: string;
}
export interface Output {
  kinesis_data_stream: KinesisDataStream;
  s3_destination: S3Destination;
}
export interface BoundingBox {
  height?: number;
  left?: number;
  top?: number;
  width?: number;
}
export interface Polygon {
  x?: number;
  y?: number;
}
export interface RegionsOfInterest {
  bounding_box: BoundingBox;
  polygon: Polygon;
}
export interface ConnectedHome {
  labels?: string[];
}
export interface FaceSearch {
  collection_id: string;
}
export interface Settings {
  connected_home: ConnectedHome;
  face_search: FaceSearch;
}
export interface Timeouts {
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
  data_sharing_preference: DataSharingPreference;
  input: Input;
  notification_channel: NotificationChannel;
  output: Output;
  regions_of_interest: RegionsOfInterest;
  settings: Settings;
  timeouts: Timeouts;
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