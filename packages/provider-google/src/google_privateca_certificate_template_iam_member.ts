import { TerraformConfig, TerraformResource } from "tfs";
export interface Condition {
  description?: string;
  expression: string;
  title: string;
}
export interface GooglePrivatecaCertificateTemplateIamMemberArgs {
  certificate_template: string;
  member: string;
  role: string;
  condition: Condition;
}
export class google_privateca_certificate_template_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GooglePrivatecaCertificateTemplateIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_privateca_certificate_template_iam_member");
  }
}