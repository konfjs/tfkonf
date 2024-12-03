import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsRdsCertificateArgs {
  certificate_identifier: string;
}
export class aws_rds_certificate extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsRdsCertificateArgs) {
    super(config, "resource", args, resourceName, "aws_rds_certificate");
  }
}