import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsPinpointsmsvoicev2ConfigurationSetArgs {
  default_message_type?: string;
  default_sender_id?: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_pinpointsmsvoicev2_configuration_set extends TerraformResource {
  readonly arn!: string;
  readonly id!: string;
  readonly tags_all!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsPinpointsmsvoicev2ConfigurationSetArgs) {
    super(config, "resource", args, resourceName, "aws_pinpointsmsvoicev2_configuration_set");
  }
}