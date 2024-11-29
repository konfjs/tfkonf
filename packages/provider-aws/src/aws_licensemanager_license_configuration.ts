import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsLicensemanagerLicenseConfigurationArgs {
  description?: string;
  license_count?: number;
  license_count_hard_limit?: boolean;
  license_counting_type: string;
  license_rules?: string[];
  name: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_licensemanager_license_configuration extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly owner_account_id!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsLicensemanagerLicenseConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_licensemanager_license_configuration");
  }
}