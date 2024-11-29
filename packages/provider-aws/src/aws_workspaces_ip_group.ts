import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsWorkspacesIpGroupArgsRules {
  description?: string;
  source: string;
}
export interface AwsWorkspacesIpGroupArgs {
  description?: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  rules: AwsWorkspacesIpGroupArgsRules;
}
export class aws_workspaces_ip_group extends TerraformResource {
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsWorkspacesIpGroupArgs) {
    super(config, "resource", args, resourceName, "aws_workspaces_ip_group");
  }
}