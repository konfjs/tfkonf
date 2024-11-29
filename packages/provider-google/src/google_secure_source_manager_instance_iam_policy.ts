import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleSecureSourceManagerInstanceIamPolicyArgs {
  instance_id: string;
  policy_data: string;
}
export class google_secure_source_manager_instance_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSecureSourceManagerInstanceIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_secure_source_manager_instance_iam_policy");
  }
}