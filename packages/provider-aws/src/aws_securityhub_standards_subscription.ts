import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsSecurityhubStandardsSubscriptionArgs {
  standards_arn: string;
}
export class aws_securityhub_standards_subscription extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSecurityhubStandardsSubscriptionArgs) {
    super(config, "resource", args, resourceName, "aws_securityhub_standards_subscription");
  }
}