import { TerraformConfig, TerraformResource } from "tfs";
export interface MountOptions {
  version?: string;
}
export interface OnPremConfig {
  agent_arns: string[];
}
export interface AwsDatasyncLocationNfsArgs {
  server_hostname: string;
  subdirectory: string;
  tags?: {
    [key: string]: string;
  };
  mount_options: MountOptions;
  on_prem_config: OnPremConfig;
}
export class aws_datasync_location_nfs extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly uri!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDatasyncLocationNfsArgs) {
    super(config, "resource", args, resourceName, "aws_datasync_location_nfs");
  }
}