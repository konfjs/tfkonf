import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsElbAttachmentArgs {
  elb: string;
  instance: string;
}
export class aws_elb_attachment extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsElbAttachmentArgs) {
    super(config, "resource", args, resourceName, "aws_elb_attachment");
  }
}