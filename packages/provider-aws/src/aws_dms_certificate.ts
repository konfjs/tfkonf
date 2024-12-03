import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsDmsCertificateArgs {
  certificate_id: string;
  certificate_pem?: string;
  certificate_wallet?: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_dms_certificate extends TerraformResource {
  readonly certificate_arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsDmsCertificateArgs) {
    super(config, "resource", args, resourceName, "aws_dms_certificate");
  }
}