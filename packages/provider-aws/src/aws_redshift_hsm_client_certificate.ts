import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsRedshiftHsmClientCertificateArgs {
  hsm_client_certificate_identifier: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_redshift_hsm_client_certificate extends TerraformResource {
  readonly arn!: string;
  readonly hsm_client_certificate_public_key!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsRedshiftHsmClientCertificateArgs) {
    super(config, "resource", args, resourceName, "aws_redshift_hsm_client_certificate");
  }
}