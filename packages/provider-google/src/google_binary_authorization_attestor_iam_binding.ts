import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleBinaryAuthorizationAttestorIamBindingArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleBinaryAuthorizationAttestorIamBindingArgs {
  attestor: string;
  members: string[];
  role: string;
  condition: GoogleBinaryAuthorizationAttestorIamBindingArgscondition;
}
export class google_binary_authorization_attestor_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleBinaryAuthorizationAttestorIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_binary_authorization_attestor_iam_binding");
  }
}