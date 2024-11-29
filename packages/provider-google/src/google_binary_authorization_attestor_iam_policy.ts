import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleBinaryAuthorizationAttestorIamPolicyArgs {
  attestor: string;
  policy_data: string;
}
export class google_binary_authorization_attestor_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleBinaryAuthorizationAttestorIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_binary_authorization_attestor_iam_policy");
  }
}