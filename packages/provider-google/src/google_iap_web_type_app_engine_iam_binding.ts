import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleIapWebTypeAppEngineIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleIapWebTypeAppEngineIamBindingArgs {
  app_id: string;
  members: string[];
  role: string;
  condition: GoogleIapWebTypeAppEngineIamBindingArgsCondition;
}
export class google_iap_web_type_app_engine_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleIapWebTypeAppEngineIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_iap_web_type_app_engine_iam_binding");
  }
}