import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleCloudbuildv2ConnectionIamPolicyArgs {
  name: string;
  policy_data: string;
}
export class google_cloudbuildv2_connection_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleCloudbuildv2ConnectionIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_cloudbuildv2_connection_iam_policy");
  }
}