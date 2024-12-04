import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GooglePrivatecaCertificateTemplateIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GooglePrivatecaCertificateTemplateIamBindingArgs {
  certificate_template: string;
  members: string[];
  role: string;
  condition: GooglePrivatecaCertificateTemplateIamBindingArgsCondition;
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
