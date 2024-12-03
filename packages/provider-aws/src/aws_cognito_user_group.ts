import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsCognitoUserGroupArgs {
  description?: string;
  name: string;
  precedence?: number;
  role_arn?: string;
  user_pool_id: string;
}
export class aws_cognito_user_group extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCognitoUserGroupArgs) {
    super(config, "resource", args, resourceName, "aws_cognito_user_group");
  }
}