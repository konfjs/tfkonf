import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsVpclatticeTargetGroupAttachmentArgsTarget {
  id: string;
}
export interface AwsVpclatticeTargetGroupAttachmentArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface AwsVpclatticeTargetGroupAttachmentArgs {
  target_group_identifier: string;
  target: AwsVpclatticeTargetGroupAttachmentArgsTarget;
  timeouts?: AwsVpclatticeTargetGroupAttachmentArgsTimeouts;
}
export class aws_vpclattice_target_group_attachment extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsVpclatticeTargetGroupAttachmentArgs) {
    super(config, "resource", args, resourceName, "aws_vpclattice_target_group_attachment");
  }
}