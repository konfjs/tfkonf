import { TerraformConfig, TerraformResource } from "tfs";
export interface CertificateSettings {
  custom_certificate_arn?: string;
  type: string;
}
export interface SubDomain {
  branch_name: string;
  prefix: string;
}
export interface AwsAmplifyDomainAssociationArgs {
  app_id: string;
  domain_name: string;
  enable_auto_sub_domain?: boolean;
  wait_for_verification?: boolean;
  certificate_settings: CertificateSettings;
  sub_domain: SubDomain;
}
export class aws_amplify_domain_association extends TerraformResource {
  readonly arn!: string;
  readonly certificate_verification_dns_record!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAmplifyDomainAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_amplify_domain_association");
  }
}