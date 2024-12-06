import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCognitoResourceServerArgsScope {
  scope_description: string;
  scope_name: string;
}

export interface AwsCognitoResourceServerArgs {
  identifier: string;
  name: string;
  user_pool_id: string;
  scope: AwsCognitoResourceServerArgsScope;
}

export class aws_cognito_resource_server extends TerraformResource {
  readonly id?: string;
  readonly scope_identifiers!: string[];

  constructor(config: TerraformConfig, resourceName: string, args: AwsCognitoResourceServerArgs) {
    super(config, "resource", args, resourceName, "aws_cognito_resource_server");
  }
}
