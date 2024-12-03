import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsCognitoUserArgs {
  attributes?: {
    [key: string]: string;
  };
  client_metadata?: {
    [key: string]: string;
  };
  desired_delivery_mediums?: string[];
  enabled?: boolean;
  force_alias_creation?: boolean;
  message_action?: string;
  password?: string;
  temporary_password?: string;
  user_pool_id: string;
  username: string;
  validation_data?: {
    [key: string]: string;
  };
}
export class aws_cognito_user extends TerraformResource {
  readonly creation_date!: string;
  readonly id?: string;
  readonly last_modified_date!: string;
  readonly mfa_setting_list!: string[];
  readonly preferred_mfa_setting!: string;
  readonly status!: string;
  readonly sub!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCognitoUserArgs) {
    super(config, "resource", args, resourceName, "aws_cognito_user");
  }
}