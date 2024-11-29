import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsCloudfrontRealtimeLogConfigArgsendpointKinesisStreamConfig {
  role_arn: string;
  stream_arn: string;
}
export interface AwsCloudfrontRealtimeLogConfigArgsendpoint {
  stream_type: string;
  kinesis_stream_config: AwsCloudfrontRealtimeLogConfigArgsendpointKinesisStreamConfig;
}
export interface AwsCloudfrontRealtimeLogConfigArgs {
  fields: string[];
  name: string;
  sampling_rate: number;
  endpoint: AwsCloudfrontRealtimeLogConfigArgsendpoint;
}
export class aws_cloudfront_realtime_log_config extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudfrontRealtimeLogConfigArgs) {
    super(config, "resource", args, resourceName, "aws_cloudfront_realtime_log_config");
  }
}