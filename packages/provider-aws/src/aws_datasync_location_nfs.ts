import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDatasyncLocationNfsArgsMountOptions {
  version?: string;
}

export interface AwsDatasyncLocationNfsArgsOnPremConfig {
  agent_arns: string[];
}

export interface AwsDatasyncLocationNfsArgs {
  server_hostname: string;
  subdirectory: string;
  tags?: { [key: string]: string };
  mount_options: AwsDatasyncLocationNfsArgsMountOptions;
  on_prem_config: AwsDatasyncLocationNfsArgsOnPremConfig;
}

export class aws_datasync_location_nfs extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: { [key: string]: string };
  readonly uri!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsDatasyncLocationNfsArgs) {
    super(config, "resource", args, resourceName, "aws_datasync_location_nfs");
  }
}
