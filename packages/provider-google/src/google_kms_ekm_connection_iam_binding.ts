import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleKmsEkmConnectionIamBindingArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleKmsEkmConnectionIamBindingArgs {
  members: string[];
  name: string;
  role: string;
  condition: GoogleKmsEkmConnectionIamBindingArgscondition;
}
export class google_kms_ekm_connection_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleKmsEkmConnectionIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_kms_ekm_connection_iam_binding");
  }
}