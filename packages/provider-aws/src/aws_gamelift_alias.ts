import { TerraformConfig, TerraformResource } from "tfs";
export interface RoutingStrategy {
  fleet_id?: string;
  message?: string;
  type: string;
}
export interface AwsGameliftAliasArgs {
  description?: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  routing_strategy: RoutingStrategy;
}
export class aws_gamelift_alias extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsGameliftAliasArgs) {
    super(config, "resource", args, resourceName, "aws_gamelift_alias");
  }
}