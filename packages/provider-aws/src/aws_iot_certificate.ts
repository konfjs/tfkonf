import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIotCertificateArgs {
  active: boolean;
  ca_pem?: string;
  csr?: string;
}

export class aws_iot_certificate extends TerraformResource {
  readonly arn!: string;
  readonly ca_certificate_id!: string;
  readonly certificate_pem?: string;
  readonly id?: string;
  readonly private_key!: string;
  readonly public_key!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsIotCertificateArgs) {
    super(config, "resource", args, resourceName, "aws_iot_certificate");
  }
}
