import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsPinpointEmailChannelArgs {
  application_id: string;
  configuration_set?: string;
  enabled?: boolean;
  from_address: string;
  identity: string;
  role_arn?: string;
}
export class aws_pinpoint_email_channel extends TerraformResource {
  readonly id?: string;
  readonly messages_per_second!: number;
  constructor(config: TerraformConfig, resourceName: string, args: AwsPinpointEmailChannelArgs) {
    super(config, "resource", args, resourceName, "aws_pinpoint_email_channel");
  }
}