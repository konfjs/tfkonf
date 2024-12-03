import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsRedshiftserverlessCustomDomainAssociationArgs {
  custom_domain_certificate_arn: string;
  custom_domain_name: string;
  workgroup_name: string;
}
export class aws_redshiftserverless_custom_domain_association extends TerraformResource {
  readonly custom_domain_certificate_expiry_time!: string;
  readonly id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsRedshiftserverlessCustomDomainAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_redshiftserverless_custom_domain_association");
  }
}