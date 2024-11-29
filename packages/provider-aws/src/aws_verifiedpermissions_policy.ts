import { TerraformConfig, TerraformResource } from "tfs";
export interface Static {
  description?: string;
  statement: string;
}
export interface Principal {
  entity_id: string;
  entity_type: string;
}
export interface Resource {
  entity_id: string;
  entity_type: string;
}
export interface TemplateLinked {
  policy_template_id: string;
  principal: Principal;
  resource: Resource;
}
export interface Definition {
  static: Static;
  template_linked: TemplateLinked;
}
export interface AwsVerifiedpermissionsPolicyArgs {
  policy_store_id: string;
  definition: Definition;
}
export class aws_verifiedpermissions_policy extends TerraformResource {
  readonly created_date!: string;
  readonly id!: string;
  readonly policy_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsVerifiedpermissionsPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_verifiedpermissions_policy");
  }
}