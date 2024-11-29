import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsRedshiftserverlessUsageLimitArgs {
  amount: number;
  breach_action?: string;
  period?: string;
  resource_arn: string;
  usage_type: string;
}
export class aws_redshiftserverless_usage_limit extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsRedshiftserverlessUsageLimitArgs) {
    super(config, "resource", args, resourceName, "aws_redshiftserverless_usage_limit");
  }
}