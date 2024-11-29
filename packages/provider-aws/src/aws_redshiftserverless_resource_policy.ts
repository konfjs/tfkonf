import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsRedshiftserverlessResourcePolicyArgs {
  policy: string;
  resource_arn: string;
}
export class aws_redshiftserverless_resource_policy extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsRedshiftserverlessResourcePolicyArgs) {
    super(config, "resource", args, resourceName, "aws_redshiftserverless_resource_policy");
  }
}