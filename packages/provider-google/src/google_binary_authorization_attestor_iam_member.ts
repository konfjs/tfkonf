import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleBinaryAuthorizationAttestorIamMemberArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleBinaryAuthorizationAttestorIamMemberArgs {
  attestor: string;
  member: string;
  role: string;
  condition: GoogleBinaryAuthorizationAttestorIamMemberArgscondition;
}
export class google_binary_authorization_attestor_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleBinaryAuthorizationAttestorIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_binary_authorization_attestor_iam_member");
  }
}