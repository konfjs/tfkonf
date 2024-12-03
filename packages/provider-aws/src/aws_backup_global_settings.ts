import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsBackupGlobalSettingsArgs {
  global_settings: {
    [key: string]: string;
  };
}
export class aws_backup_global_settings extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsBackupGlobalSettingsArgs) {
    super(config, "resource", args, resourceName, "aws_backup_global_settings");
  }
}