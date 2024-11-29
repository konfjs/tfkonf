import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleBinaryAuthorizationAttestorIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleBinaryAuthorizationAttestorIamMemberArgs {
  attestor: string;
  member: string;
  role: string;
  condition: GoogleBinaryAuthorizationAttestorIamMemberArgsCondition;
}
export class google_binary_authorization_attestor_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleBinaryAuthorizationAttestorIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_binary_authorization_attestor_iam_member");
  }
}