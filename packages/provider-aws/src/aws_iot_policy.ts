import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsIotPolicyArgstimeouts {
  delete?: string;
  update?: string;
}
export interface AwsIotPolicyArgs {
  name: string;
  policy: string;
  tags?: {
    [key: string]: string;
  };
  timeouts: AwsIotPolicyArgstimeouts;
}
export class aws_iot_policy extends TerraformResource {
  readonly arn!: string;
  readonly default_version_id!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsIotPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_iot_policy");
  }
}