import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsAlbTargetGroupAttachmentArgs {
  availability_zone?: string;
  port?: number;
  target_group_arn: string;
  target_id: string;
}
export class aws_alb_target_group_attachment extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAlbTargetGroupAttachmentArgs) {
    super(config, "resource", args, resourceName, "aws_alb_target_group_attachment");
  }
}