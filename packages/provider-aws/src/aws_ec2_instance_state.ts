import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsEc2InstanceStateArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsEc2InstanceStateArgs {
  force?: boolean;
  instance_id: string;
  state: string;
  timeouts: AwsEc2InstanceStateArgsTimeouts;
}
export class aws_ec2_instance_state extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEc2InstanceStateArgs) {
    super(config, "resource", args, resourceName, "aws_ec2_instance_state");
  }
}