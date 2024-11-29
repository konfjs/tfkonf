import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsIamAccountAliasArgs {
  account_alias: string;
}
export class aws_iam_account_alias extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsIamAccountAliasArgs) {
    super(config, "resource", args, resourceName, "aws_iam_account_alias");
  }
}