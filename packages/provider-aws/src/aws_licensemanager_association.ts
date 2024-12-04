import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLicensemanagerAssociationArgs {
  license_configuration_arn: string;
  resource_arn: string;
}

export class aws_licensemanager_association extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsLicensemanagerAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_licensemanager_association");
  }
}
