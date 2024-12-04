import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsWorklinkWebsiteCertificateAuthorityAssociationArgs {
  certificate: string;
  display_name?: string;
  fleet_arn: string;
}

export class aws_worklink_website_certificate_authority_association extends TerraformResource {
  readonly id?: string;
  readonly website_ca_id!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsWorklinkWebsiteCertificateAuthorityAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_worklink_website_certificate_authority_association");
  }
}
