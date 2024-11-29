import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsMedialiveMultiplexArgsMultiplexSettings {
  transport_stream_bitrate: number;
  transport_stream_id: number;
}
export interface AwsMedialiveMultiplexArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsMedialiveMultiplexArgs {
  availability_zones: string[];
  name: string;
  start_multiplex?: boolean;
  tags?: {
    [key: string]: string;
  };
  multiplex_settings: AwsMedialiveMultiplexArgsMultiplexSettings;
  timeouts: AwsMedialiveMultiplexArgsTimeouts;
}
export class aws_medialive_multiplex extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsMedialiveMultiplexArgs) {
    super(config, "resource", args, resourceName, "aws_medialive_multiplex");
  }
}