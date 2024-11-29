import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleCloudRunV2ServiceIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleCloudRunV2ServiceIamMemberArgs {
  member: string;
  name: string;
  role: string;
  condition: GoogleCloudRunV2ServiceIamMemberArgsCondition;
}
export class google_cloud_run_v2_service_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleCloudRunV2ServiceIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_cloud_run_v2_service_iam_member");
  }
}