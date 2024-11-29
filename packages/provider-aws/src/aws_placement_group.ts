import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsPlacementGroupArgs {
  name: string;
  strategy: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_placement_group extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly partition_count?: number;
  readonly placement_group_id!: string;
  readonly spread_level?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsPlacementGroupArgs) {
    super(config, "resource", args, resourceName, "aws_placement_group");
  }
}