import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsSesv2AccountSuppressionAttributesArgs {
  suppressed_reasons: string[];
}
export class aws_sesv2_account_suppression_attributes extends TerraformResource {
  readonly id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSesv2AccountSuppressionAttributesArgs) {
    super(config, "resource", args, resourceName, "aws_sesv2_account_suppression_attributes");
  }
}