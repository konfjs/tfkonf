import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleIapWebBackendServiceIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleIapWebBackendServiceIamBindingArgs {
  members: string[];
  role: string;
  web_backend_service: string;
  condition: GoogleIapWebBackendServiceIamBindingArgsCondition;
}
export class google_iap_web_backend_service_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleIapWebBackendServiceIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_iap_web_backend_service_iam_binding");
  }
}