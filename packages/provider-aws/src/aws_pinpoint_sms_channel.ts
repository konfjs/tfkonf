import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsPinpointSmsChannelArgs {
  application_id: string;
  enabled?: boolean;
  sender_id?: string;
  short_code?: string;
}
export class aws_pinpoint_sms_channel extends TerraformResource {
  readonly id?: string;
  readonly promotional_messages_per_second!: number;
  readonly transactional_messages_per_second!: number;
  constructor(config: TerraformConfig, resourceName: string, args: AwsPinpointSmsChannelArgs) {
    super(config, "resource", args, resourceName, "aws_pinpoint_sms_channel");
  }
}