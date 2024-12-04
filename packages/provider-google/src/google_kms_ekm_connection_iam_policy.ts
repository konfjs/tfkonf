import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleKmsEkmConnectionIamPolicyArgs {
  name: string;
  policy_data: string;
}

export class google_kms_ekm_connection_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleKmsEkmConnectionIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_kms_ekm_connection_iam_policy");
  }
}
