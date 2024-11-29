import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsEc2TagArgs {
  key: string;
  resource_id: string;
  value: string;
}
export class aws_ec2_tag extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEc2TagArgs) {
    super(config, "resource", args, resourceName, "aws_ec2_tag");
  }
}