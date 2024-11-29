import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsAcmpcaPolicyArgs {
  policy: string;
  resource_arn: string;
}
export class aws_acmpca_policy extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAcmpcaPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_acmpca_policy");
  }
}