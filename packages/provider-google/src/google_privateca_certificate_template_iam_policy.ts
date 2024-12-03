import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GooglePrivatecaCertificateTemplateIamPolicyArgs {
  certificate_template: string;
  policy_data: string;
}
export class google_privateca_certificate_template_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GooglePrivatecaCertificateTemplateIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_privateca_certificate_template_iam_policy");
  }
}