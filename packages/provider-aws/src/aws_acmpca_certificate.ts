import { TerraformConfig, TerraformResource } from "tfs";
export interface Validity {
  type: string;
  value: string;
}
export interface AwsAcmpcaCertificateArgs {
  api_passthrough?: string;
  certificate_authority_arn: string;
  certificate_signing_request: string;
  signing_algorithm: string;
  template_arn?: string;
  validity: Validity;
}
export class aws_acmpca_certificate extends TerraformResource {
  readonly arn!: string;
  readonly certificate!: string;
  readonly certificate_chain!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAcmpcaCertificateArgs) {
    super(config, "resource", args, resourceName, "aws_acmpca_certificate");
  }
}