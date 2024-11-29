import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleDataFusionInstanceIamPolicyArgs {
  name: string;
  policy_data: string;
}
export class google_data_fusion_instance_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  readonly region?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataFusionInstanceIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_data_fusion_instance_iam_policy");
  }
}