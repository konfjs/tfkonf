import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsCognitoResourceServerArgsscope {
  scope_description: string;
  scope_name: string;
}
export interface AwsCognitoResourceServerArgs {
  identifier: string;
  name: string;
  user_pool_id: string;
  scope: AwsCognitoResourceServerArgsscope;
}
export class aws_cognito_resource_server extends TerraformResource {
  readonly id?: string;
  readonly scope_identifiers!: string[];
  constructor(config: TerraformConfig, resourceName: string, args: AwsCognitoResourceServerArgs) {
    super(config, "resource", args, resourceName, "aws_cognito_resource_server");
  }
}