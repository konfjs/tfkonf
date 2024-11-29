import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  update?: string;
}
export interface AwsDirectoryServiceRadiusSettingsArgs {
  authentication_protocol: string;
  directory_id: string;
  display_label: string;
  radius_port: number;
  radius_retries: number;
  radius_servers: string[];
  radius_timeout: number;
  shared_secret: string;
  use_same_username?: boolean;
  timeouts: Timeouts;
}
export class aws_directory_service_radius_settings extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDirectoryServiceRadiusSettingsArgs) {
    super(config, "resource", args, resourceName, "aws_directory_service_radius_settings");
  }
}