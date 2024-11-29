import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsOamSinkPolicyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsOamSinkPolicyArgs {
  policy: string;
  sink_identifier: string;
  timeouts?: AwsOamSinkPolicyArgsTimeouts;
}
export class aws_oam_sink_policy extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly sink_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsOamSinkPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_oam_sink_policy");
  }
}