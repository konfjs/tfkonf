import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsVerifiedpermissionsPolicyArgsDefinitionStatic {
  description?: string;
  statement: string;
}
export interface AwsVerifiedpermissionsPolicyArgsDefinitionTemplateLinkedPrincipal {
  entity_id: string;
  entity_type: string;
}
export interface AwsVerifiedpermissionsPolicyArgsDefinitionTemplateLinkedResource {
  entity_id: string;
  entity_type: string;
}
export interface AwsVerifiedpermissionsPolicyArgsDefinitionTemplateLinked {
  policy_template_id: string;
  principal: AwsVerifiedpermissionsPolicyArgsDefinitionTemplateLinkedPrincipal;
  resource: AwsVerifiedpermissionsPolicyArgsDefinitionTemplateLinkedResource;
}
export interface AwsVerifiedpermissionsPolicyArgsDefinition {
  static: AwsVerifiedpermissionsPolicyArgsDefinitionStatic;
  template_linked: AwsVerifiedpermissionsPolicyArgsDefinitionTemplateLinked;
}
export interface AwsVerifiedpermissionsPolicyArgs {
  policy_store_id: string;
  definition: AwsVerifiedpermissionsPolicyArgsDefinition;
}
export class aws_verifiedpermissions_policy extends TerraformResource {
  readonly created_date!: string;
  readonly id!: string;
  readonly policy_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsVerifiedpermissionsPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_verifiedpermissions_policy");
  }
}