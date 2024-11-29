import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsVerifiedpermissionsPolicyStoreArgsValidationSettings {
  mode: string;
}
export interface AwsVerifiedpermissionsPolicyStoreArgs {
  description?: string;
  validation_settings: AwsVerifiedpermissionsPolicyStoreArgsValidationSettings;
}
export class aws_verifiedpermissions_policy_store extends TerraformResource {
  readonly arn!: string;
  readonly id!: string;
  readonly policy_store_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsVerifiedpermissionsPolicyStoreArgs) {
    super(config, "resource", args, resourceName, "aws_verifiedpermissions_policy_store");
  }
}