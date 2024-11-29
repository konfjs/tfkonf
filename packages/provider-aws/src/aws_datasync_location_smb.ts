import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsDatasyncLocationSmbArgsMountOptions {
  version?: string;
}
export interface AwsDatasyncLocationSmbArgs {
  agent_arns: string[];
  password: string;
  server_hostname: string;
  subdirectory: string;
  tags?: {
    [key: string]: string;
  };
  user: string;
  mount_options: AwsDatasyncLocationSmbArgsMountOptions;
}
export class aws_datasync_location_smb extends TerraformResource {
  readonly arn!: string;
  readonly domain?: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly uri!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDatasyncLocationSmbArgs) {
    super(config, "resource", args, resourceName, "aws_datasync_location_smb");
  }
}