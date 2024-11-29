import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleSecretManagerSecretIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleSecretManagerSecretIamBindingArgs {
  members: string[];
  role: string;
  secret_id: string;
  condition: GoogleSecretManagerSecretIamBindingArgsCondition;
}
export class google_secret_manager_secret_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSecretManagerSecretIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_secret_manager_secret_iam_binding");
  }
}