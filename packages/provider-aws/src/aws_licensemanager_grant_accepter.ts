import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsLicensemanagerGrantAccepterArgs {
  grant_arn: string;
}
export class aws_licensemanager_grant_accepter extends TerraformResource {
  readonly allowed_operations!: string[];
  readonly home_region!: string;
  readonly id?: string;
  readonly license_arn!: string;
  readonly name!: string;
  readonly parent_arn!: string;
  readonly principal!: string;
  readonly status!: string;
  readonly version!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsLicensemanagerGrantAccepterArgs) {
    super(config, "resource", args, resourceName, "aws_licensemanager_grant_accepter");
  }
}