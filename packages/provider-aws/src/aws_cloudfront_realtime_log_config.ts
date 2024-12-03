import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsCloudfrontRealtimeLogConfigArgsEndpointKinesisStreamConfig {
  role_arn: string;
  stream_arn: string;
}
export interface AwsCloudfrontRealtimeLogConfigArgsEndpoint {
  stream_type: string;
  kinesis_stream_config: AwsCloudfrontRealtimeLogConfigArgsEndpointKinesisStreamConfig;
}
export interface AwsCloudfrontRealtimeLogConfigArgs {
  fields: string[];
  name: string;
  sampling_rate: number;
  endpoint: AwsCloudfrontRealtimeLogConfigArgsEndpoint;
}
export class aws_cloudfront_realtime_log_config extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudfrontRealtimeLogConfigArgs) {
    super(config, "resource", args, resourceName, "aws_cloudfront_realtime_log_config");
  }
}