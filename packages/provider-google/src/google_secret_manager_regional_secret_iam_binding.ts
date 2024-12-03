import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleSecretManagerRegionalSecretIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleSecretManagerRegionalSecretIamBindingArgs {
  members: string[];
  role: string;
  secret_id: string;
  condition: GoogleSecretManagerRegionalSecretIamBindingArgsCondition;
}
export class google_secret_manager_regional_secret_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSecretManagerRegionalSecretIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_secret_manager_regional_secret_iam_binding");
  }
}