import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsConfigDeliveryChannelArgsSnapshotDeliveryProperties {
  delivery_frequency?: string;
}
export interface AwsConfigDeliveryChannelArgs {
  name?: string;
  s3_bucket_name: string;
  s3_key_prefix?: string;
  s3_kms_key_arn?: string;
  sns_topic_arn?: string;
  snapshot_delivery_properties: AwsConfigDeliveryChannelArgsSnapshotDeliveryProperties;
}
export class aws_config_delivery_channel extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsConfigDeliveryChannelArgs) {
    super(config, "resource", args, resourceName, "aws_config_delivery_channel");
  }
}