import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsApprunnerCustomDomainAssociationArgs {
  domain_name: string;
  enable_www_subdomain?: boolean;
  service_arn: string;
}
export class aws_apprunner_custom_domain_association extends TerraformResource {
  readonly certificate_validation_records!: any[];
  readonly dns_target!: string;
  readonly id?: string;
  readonly status!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsApprunnerCustomDomainAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_apprunner_custom_domain_association");
  }
}