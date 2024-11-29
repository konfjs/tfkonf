import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsSecurityhubProductSubscriptionArgs {
  product_arn: string;
}
export class aws_securityhub_product_subscription extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSecurityhubProductSubscriptionArgs) {
    super(config, "resource", args, resourceName, "aws_securityhub_product_subscription");
  }
}