import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsPaymentcryptographyKeyAliasArgs {
  alias_name: string;
  key_arn?: string;
}
export class aws_paymentcryptography_key_alias extends TerraformResource {
  readonly id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsPaymentcryptographyKeyAliasArgs) {
    super(config, "resource", args, resourceName, "aws_paymentcryptography_key_alias");
  }
}