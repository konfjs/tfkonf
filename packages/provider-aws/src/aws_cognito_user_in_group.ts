import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsCognitoUserInGroupArgs {
  group_name: string;
  user_pool_id: string;
  username: string;
}
export class aws_cognito_user_in_group extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCognitoUserInGroupArgs) {
    super(config, "resource", args, resourceName, "aws_cognito_user_in_group");
  }
}