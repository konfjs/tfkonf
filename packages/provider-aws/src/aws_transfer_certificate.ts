import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsTransferCertificateArgs {
  certificate: string;
  certificate_chain?: string;
  description?: string;
  private_key?: string;
  tags?: {
    [key: string]: string;
  };
  usage: string;
}
export class aws_transfer_certificate extends TerraformResource {
  readonly active_date!: string;
  readonly arn!: string;
  readonly certificate_id!: string;
  readonly id?: string;
  readonly inactive_date!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsTransferCertificateArgs) {
    super(config, "resource", args, resourceName, "aws_transfer_certificate");
  }
}