import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsSwfDomainArgs {
  description?: string;
  tags?: {
    [key: string]: string;
  };
  workflow_execution_retention_period_in_days: string;
}
export class aws_swf_domain extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly name?: string;
  readonly name_prefix?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsSwfDomainArgs) {
    super(config, "resource", args, resourceName, "aws_swf_domain");
  }
}