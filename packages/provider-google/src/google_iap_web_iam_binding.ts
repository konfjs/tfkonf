import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleIapWebIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleIapWebIamBindingArgs {
  members: string[];
  role: string;
  condition: GoogleIapWebIamBindingArgsCondition;
}
export class google_iap_web_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleIapWebIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_iap_web_iam_binding");
  }
}