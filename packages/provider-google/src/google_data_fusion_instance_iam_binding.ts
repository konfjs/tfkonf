import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleDataFusionInstanceIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleDataFusionInstanceIamBindingArgs {
  members: string[];
  name: string;
  role: string;
  condition: GoogleDataFusionInstanceIamBindingArgsCondition;
}
export class google_data_fusion_instance_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  readonly region?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataFusionInstanceIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_data_fusion_instance_iam_binding");
  }
}