import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsRedshiftResourcePolicyArgs {
  policy: string;
  resource_arn: string;
}
export class aws_redshift_resource_policy extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsRedshiftResourcePolicyArgs) {
    super(config, "resource", args, resourceName, "aws_redshift_resource_policy");
  }
}