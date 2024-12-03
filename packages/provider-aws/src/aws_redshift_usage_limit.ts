import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsRedshiftUsageLimitArgs {
  amount: number;
  breach_action?: string;
  cluster_identifier: string;
  feature_type: string;
  limit_type: string;
  period?: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_redshift_usage_limit extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsRedshiftUsageLimitArgs) {
    super(config, "resource", args, resourceName, "aws_redshift_usage_limit");
  }
}