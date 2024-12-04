import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAmplifyDomainAssociationArgsCertificateSettings {
  custom_certificate_arn?: string;
  type: string;
}

export interface AwsAmplifyDomainAssociationArgsSubDomain {
  branch_name: string;
  prefix: string;
}

export interface AwsAmplifyDomainAssociationArgs {
  app_id: string;
  domain_name: string;
  enable_auto_sub_domain?: boolean;
  wait_for_verification?: boolean;
  certificate_settings: AwsAmplifyDomainAssociationArgsCertificateSettings;
  sub_domain: AwsAmplifyDomainAssociationArgsSubDomain;
}

export class aws_amplify_domain_association extends TerraformResource {
  readonly arn!: string;
  readonly certificate_verification_dns_record!: string;
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsAmplifyDomainAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_amplify_domain_association");
  }
}
