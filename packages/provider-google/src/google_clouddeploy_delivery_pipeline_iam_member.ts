import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleClouddeployDeliveryPipelineIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleClouddeployDeliveryPipelineIamMemberArgs {
  member: string;
  name: string;
  role: string;
  condition: GoogleClouddeployDeliveryPipelineIamMemberArgsCondition;
}
export class google_clouddeploy_delivery_pipeline_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleClouddeployDeliveryPipelineIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_clouddeploy_delivery_pipeline_iam_member");
  }
}