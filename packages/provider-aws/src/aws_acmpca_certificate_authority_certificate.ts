import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsAcmpcaCertificateAuthorityCertificateArgs {
  certificate: string;
  certificate_authority_arn: string;
  certificate_chain?: string;
}
export class aws_acmpca_certificate_authority_certificate extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAcmpcaCertificateAuthorityCertificateArgs) {
    super(config, "resource", args, resourceName, "aws_acmpca_certificate_authority_certificate");
  }
}