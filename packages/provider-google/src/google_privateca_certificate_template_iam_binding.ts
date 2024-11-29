import { TerraformConfig, TerraformResource } from "tfs";
export interface Condition {
  description?: string;
  expression: string;
  title: string;
}
export interface GooglePrivatecaCertificateTemplateIamBindingArgs {
  certificate_template: string;
  members: string[];
  role: string;
  condition: Condition;
}
export class google_privateca_certificate_template_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GooglePrivatecaCertificateTemplateIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_privateca_certificate_template_iam_binding");
  }
}