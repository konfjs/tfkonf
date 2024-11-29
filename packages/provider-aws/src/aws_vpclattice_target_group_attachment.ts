import { TerraformConfig, TerraformResource } from "tfs";
export interface Target {
  id: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface AwsVpclatticeTargetGroupAttachmentArgs {
  target_group_identifier: string;
  target: Target;
  timeouts: Timeouts;
}
export class aws_vpclattice_target_group_attachment extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsVpclatticeTargetGroupAttachmentArgs) {
    super(config, "resource", args, resourceName, "aws_vpclattice_target_group_attachment");
  }
}