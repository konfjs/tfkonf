import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsPinpointAdmChannelArgs {
  application_id: string;
  client_id: string;
  client_secret: string;
  enabled?: boolean;
}
export class aws_pinpoint_adm_channel extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsPinpointAdmChannelArgs) {
    super(config, "resource", args, resourceName, "aws_pinpoint_adm_channel");
  }
}