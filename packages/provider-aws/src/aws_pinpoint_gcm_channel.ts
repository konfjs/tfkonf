import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsPinpointGcmChannelArgs {
  api_key?: string;
  application_id: string;
  default_authentication_method?: string;
  enabled?: boolean;
  service_json?: string;
}
export class aws_pinpoint_gcm_channel extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsPinpointGcmChannelArgs) {
    super(config, "resource", args, resourceName, "aws_pinpoint_gcm_channel");
  }
}