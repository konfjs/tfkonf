import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsPinpointEventStreamArgs {
  application_id: string;
  destination_stream_arn: string;
  role_arn: string;
}
export class aws_pinpoint_event_stream extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsPinpointEventStreamArgs) {
    super(config, "resource", args, resourceName, "aws_pinpoint_event_stream");
  }
}