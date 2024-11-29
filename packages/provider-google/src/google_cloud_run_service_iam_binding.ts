import { TerraformConfig, TerraformResource } from "tfs";
export interface Condition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleCloudRunServiceIamBindingArgs {
  members: string[];
  role: string;
  service: string;
  condition: Condition;
}
export class google_cloud_run_service_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleCloudRunServiceIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_cloud_run_service_iam_binding");
  }
}