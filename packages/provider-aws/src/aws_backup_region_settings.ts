import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsBackupRegionSettingsArgs {
  resource_type_opt_in_preference: {
    [key: string]: any;
  };
}
export class aws_backup_region_settings extends TerraformResource {
  readonly id?: string;
  readonly resource_type_management_preference?: {
    [key: string]: any;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsBackupRegionSettingsArgs) {
    super(config, "resource", args, resourceName, "aws_backup_region_settings");
  }
}