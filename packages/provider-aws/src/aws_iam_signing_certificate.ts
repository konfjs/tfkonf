import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsIamSigningCertificateArgs {
  certificate_body: string;
  status?: string;
  user_name: string;
}
export class aws_iam_signing_certificate extends TerraformResource {
  readonly certificate_id!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsIamSigningCertificateArgs) {
    super(config, "resource", args, resourceName, "aws_iam_signing_certificate");
  }
}