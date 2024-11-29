import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface AwsWorkspacesConnectionAliasArgs {
  connection_string: string;
  tags?: {
    [key: string]: string;
  };
  timeouts: Timeouts;
}
export class aws_workspaces_connection_alias extends TerraformResource {
  readonly id!: string;
  readonly owner_account_id!: string;
  readonly state!: string;
  readonly tags_all!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsWorkspacesConnectionAliasArgs) {
    super(config, "resource", args, resourceName, "aws_workspaces_connection_alias");
  }
}