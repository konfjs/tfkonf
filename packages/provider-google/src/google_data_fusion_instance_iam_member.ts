import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleDataFusionInstanceIamMemberArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleDataFusionInstanceIamMemberArgs {
  member: string;
  name: string;
  role: string;
  condition: GoogleDataFusionInstanceIamMemberArgscondition;
}
export class google_data_fusion_instance_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  readonly region?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataFusionInstanceIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_data_fusion_instance_iam_member");
  }
}