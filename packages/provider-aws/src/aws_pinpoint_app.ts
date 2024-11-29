import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsPinpointAppArgsCampaignHook {
  lambda_function_name?: string;
  mode?: string;
  web_url?: string;
}
export interface AwsPinpointAppArgsLimits {
  daily?: number;
  maximum_duration?: number;
  messages_per_second?: number;
  total?: number;
}
export interface AwsPinpointAppArgsQuietTime {
  end?: string;
  start?: string;
}
export interface AwsPinpointAppArgs {
  tags?: {
    [key: string]: string;
  };
  campaign_hook: AwsPinpointAppArgsCampaignHook;
  limits: AwsPinpointAppArgsLimits;
  quiet_time: AwsPinpointAppArgsQuietTime;
}
export class aws_pinpoint_app extends TerraformResource {
  readonly application_id!: string;
  readonly arn!: string;
  readonly id?: string;
  readonly name?: string;
  readonly name_prefix?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsPinpointAppArgs) {
    super(config, "resource", args, resourceName, "aws_pinpoint_app");
  }
}