import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleSecureSourceManagerInstanceIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleSecureSourceManagerInstanceIamBindingArgs {
  instance_id: string;
  members: string[];
  role: string;
  condition: GoogleSecureSourceManagerInstanceIamBindingArgsCondition;
}
export class google_secure_source_manager_instance_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSecureSourceManagerInstanceIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_secure_source_manager_instance_iam_binding");
  }
}