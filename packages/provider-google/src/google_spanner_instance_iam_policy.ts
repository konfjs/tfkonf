import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleSpannerInstanceIamPolicyArgs {
  instance: string;
  policy_data: string;
}
export class google_spanner_instance_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSpannerInstanceIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_spanner_instance_iam_policy");
  }
}