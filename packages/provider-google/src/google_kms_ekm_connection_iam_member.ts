import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleKmsEkmConnectionIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleKmsEkmConnectionIamMemberArgs {
  member: string;
  name: string;
  role: string;
  condition: GoogleKmsEkmConnectionIamMemberArgsCondition;
}
export class google_kms_ekm_connection_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleKmsEkmConnectionIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_kms_ekm_connection_iam_member");
  }
}