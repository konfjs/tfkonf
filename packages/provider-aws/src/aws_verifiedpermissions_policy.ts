import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsVerifiedpermissionsPolicyArgsdefinitionstatic {
  description?: string;
  statement: string;
}
export interface AwsVerifiedpermissionsPolicyArgsdefinitionTemplateLinkedprincipal {
  entity_id: string;
  entity_type: string;
}
export interface AwsVerifiedpermissionsPolicyArgsdefinitionTemplateLinkedresource {
  entity_id: string;
  entity_type: string;
}
export interface AwsVerifiedpermissionsPolicyArgsdefinitionTemplateLinked {
  policy_template_id: string;
  principal: AwsVerifiedpermissionsPolicyArgsdefinitionTemplateLinkedprincipal;
  resource: AwsVerifiedpermissionsPolicyArgsdefinitionTemplateLinkedresource;
}
export interface AwsVerifiedpermissionsPolicyArgsdefinition {
  static: AwsVerifiedpermissionsPolicyArgsdefinitionstatic;
  template_linked: AwsVerifiedpermissionsPolicyArgsdefinitionTemplateLinked;
}
export interface AwsVerifiedpermissionsPolicyArgs {
  policy_store_id: string;
  definition: AwsVerifiedpermissionsPolicyArgsdefinition;
}
export class aws_verifiedpermissions_policy extends TerraformResource {
  readonly created_date!: string;
  readonly id!: string;
  readonly policy_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsVerifiedpermissionsPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_verifiedpermissions_policy");
  }
}