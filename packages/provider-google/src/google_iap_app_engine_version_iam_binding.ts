import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleIapAppEngineVersionIamBindingArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleIapAppEngineVersionIamBindingArgs {
  app_id: string;
  members: string[];
  role: string;
  service: string;
  version_id: string;
  condition: GoogleIapAppEngineVersionIamBindingArgscondition;
}
export class google_iap_app_engine_version_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleIapAppEngineVersionIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_iap_app_engine_version_iam_binding");
  }
}