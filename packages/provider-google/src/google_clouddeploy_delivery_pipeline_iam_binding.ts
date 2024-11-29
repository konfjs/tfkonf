import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleClouddeployDeliveryPipelineIamBindingArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleClouddeployDeliveryPipelineIamBindingArgs {
  members: string[];
  name: string;
  role: string;
  condition: GoogleClouddeployDeliveryPipelineIamBindingArgscondition;
}
export class google_clouddeploy_delivery_pipeline_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleClouddeployDeliveryPipelineIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_clouddeploy_delivery_pipeline_iam_binding");
  }
}