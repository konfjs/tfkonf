import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleIapAppEngineServiceIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleIapAppEngineServiceIamBindingArgs {
  app_id: string;
  members: string[];
  role: string;
  service: string;
  condition: GoogleIapAppEngineServiceIamBindingArgsCondition;
}
export class google_iap_app_engine_service_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleIapAppEngineServiceIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_iap_app_engine_service_iam_binding");
  }
}