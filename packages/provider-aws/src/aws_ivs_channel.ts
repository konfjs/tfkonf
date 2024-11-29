import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsIvsChannelArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsIvsChannelArgs {
  tags?: {
    [key: string]: string;
  };
  timeouts: AwsIvsChannelArgsTimeouts;
}
export class aws_ivs_channel extends TerraformResource {
  readonly arn!: string;
  readonly authorized?: boolean;
  readonly id?: string;
  readonly ingest_endpoint!: string;
  readonly latency_mode?: string;
  readonly name?: string;
  readonly playback_url!: string;
  readonly recording_configuration_arn?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly type?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsIvsChannelArgs) {
    super(config, "resource", args, resourceName, "aws_ivs_channel");
  }
}