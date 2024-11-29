import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleBinaryAuthorizationAttestorIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleBinaryAuthorizationAttestorIamBindingArgs {
  attestor: string;
  members: string[];
  role: string;
  condition: GoogleBinaryAuthorizationAttestorIamBindingArgsCondition;
}
export class google_binary_authorization_attestor_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleBinaryAuthorizationAttestorIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_binary_authorization_attestor_iam_binding");
  }
}