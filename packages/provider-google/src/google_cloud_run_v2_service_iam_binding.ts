import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleCloudRunV2ServiceIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleCloudRunV2ServiceIamBindingArgs {
  members: string[];
  name: string;
  role: string;
  condition: GoogleCloudRunV2ServiceIamBindingArgsCondition;
}
export class google_cloud_run_v2_service_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleCloudRunV2ServiceIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_cloud_run_v2_service_iam_binding");
  }
}