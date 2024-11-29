import { TerraformConfig, TerraformResource } from "tfs";
export interface MappingRule {
  claim: string;
  match_type: string;
  role_arn: string;
  value: string;
}
export interface RoleMapping {
  ambiguous_role_resolution?: string;
  identity_provider: string;
  type: string;
  mapping_rule: MappingRule;
}
export interface AwsCognitoIdentityPoolRolesAttachmentArgs {
  identity_pool_id: string;
  roles: {
    [key: string]: string;
  };
  role_mapping: RoleMapping;
}
export class aws_cognito_identity_pool_roles_attachment extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCognitoIdentityPoolRolesAttachmentArgs) {
    super(config, "resource", args, resourceName, "aws_cognito_identity_pool_roles_attachment");
  }
}