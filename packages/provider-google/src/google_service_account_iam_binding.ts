import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleServiceAccountIamBindingArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleServiceAccountIamBindingArgs {
  members: string[];
  role: string;
  service_account_id: string;
  condition: GoogleServiceAccountIamBindingArgscondition;
}
export class google_service_account_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleServiceAccountIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_service_account_iam_binding");
  }
}