import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsPinpointBaiduChannelArgs {
  api_key: string;
  application_id: string;
  enabled?: boolean;
  secret_key: string;
}
export class aws_pinpoint_baidu_channel extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsPinpointBaiduChannelArgs) {
    super(config, "resource", args, resourceName, "aws_pinpoint_baidu_channel");
  }
}