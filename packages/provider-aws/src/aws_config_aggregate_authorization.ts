import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsConfigAggregateAuthorizationArgs {
  account_id: string;
  region: string;
  tags?: { [key: string]: string };
}

export class aws_config_aggregate_authorization extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsConfigAggregateAuthorizationArgs) {
    super(config, "resource", args, resourceName, "aws_config_aggregate_authorization");
  }
}
