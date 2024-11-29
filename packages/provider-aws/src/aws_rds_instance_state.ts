import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsRdsInstanceStateArgstimeouts {
  create?: string;
  update?: string;
}
export interface AwsRdsInstanceStateArgs {
  identifier: string;
  state: string;
  timeouts: AwsRdsInstanceStateArgstimeouts;
}
export class aws_rds_instance_state extends TerraformResource {
  constructor(config: TerraformConfig, resourceName: string, args: AwsRdsInstanceStateArgs) {
    super(config, "resource", args, resourceName, "aws_rds_instance_state");
  }
}