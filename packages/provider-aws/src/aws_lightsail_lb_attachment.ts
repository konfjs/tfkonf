import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsLightsailLbAttachmentArgs {
  instance_name: string;
  lb_name: string;
}
export class aws_lightsail_lb_attachment extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsLightsailLbAttachmentArgs) {
    super(config, "resource", args, resourceName, "aws_lightsail_lb_attachment");
  }
}