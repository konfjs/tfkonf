import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsOamSinkPolicyArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsOamSinkPolicyArgs {
  policy: string;
  sink_identifier: string;
  timeouts: AwsOamSinkPolicyArgstimeouts;
}
export class aws_oam_sink_policy extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly sink_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsOamSinkPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_oam_sink_policy");
  }
}