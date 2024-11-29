import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsSesReceiptFilterArgs {
  cidr: string;
  name: string;
  policy: string;
}
export class aws_ses_receipt_filter extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSesReceiptFilterArgs) {
    super(config, "resource", args, resourceName, "aws_ses_receipt_filter");
  }
}