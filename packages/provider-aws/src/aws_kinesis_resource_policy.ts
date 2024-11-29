import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsKinesisResourcePolicyArgs {
  policy: string;
  resource_arn: string;
}
export class aws_kinesis_resource_policy extends TerraformResource {
  readonly id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsKinesisResourcePolicyArgs) {
    super(config, "resource", args, resourceName, "aws_kinesis_resource_policy");
  }
}