import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsConnectUserHierarchyGroupArgs {
  instance_id: string;
  name: string;
  parent_group_id?: string;
  tags?: { [key: string]: string };
}

export class aws_connect_user_hierarchy_group extends TerraformResource {
  readonly arn!: string;
  readonly hierarchy_group_id!: string;
  readonly hierarchy_path!: any[];
  readonly id?: string;
  readonly level_id!: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsConnectUserHierarchyGroupArgs) {
    super(config, "resource", args, resourceName, "aws_connect_user_hierarchy_group");
  }
}
