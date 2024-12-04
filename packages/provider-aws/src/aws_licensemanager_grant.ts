import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLicensemanagerGrantArgs {
  allowed_operations: string[];
  license_arn: string;
  name: string;
  principal: string;
}

export class aws_licensemanager_grant extends TerraformResource {
  readonly arn!: string;
  readonly home_region!: string;
  readonly id?: string;
  readonly parent_arn!: string;
  readonly status!: string;
  readonly version!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsLicensemanagerGrantArgs) {
    super(config, "resource", args, resourceName, "aws_licensemanager_grant");
  }
}
