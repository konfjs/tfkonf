import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsRoute53QueryLogArgs {
  cloudwatch_log_group_arn: string;
  zone_id: string;
}
export class aws_route53_query_log extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsRoute53QueryLogArgs) {
    super(config, "resource", args, resourceName, "aws_route53_query_log");
  }
}