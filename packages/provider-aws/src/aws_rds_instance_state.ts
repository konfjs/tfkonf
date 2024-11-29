import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsRdsInstanceStateArgsTimeouts {
  create?: string;
  update?: string;
}
export interface AwsRdsInstanceStateArgs {
  identifier: string;
  state: string;
  timeouts: AwsRdsInstanceStateArgsTimeouts;
}
export class aws_rds_instance_state extends TerraformResource {
  constructor(config: TerraformConfig, resourceName: string, args: AwsRdsInstanceStateArgs) {
    super(config, "resource", args, resourceName, "aws_rds_instance_state");
  }
}