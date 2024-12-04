import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudwatchQueryDefinitionArgs {
  log_group_names?: string[];
  name: string;
  query_string: string;
}

export class aws_cloudwatch_query_definition extends TerraformResource {
  readonly id?: string;
  readonly query_definition_id!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudwatchQueryDefinitionArgs) {
    super(config, "resource", args, resourceName, "aws_cloudwatch_query_definition");
  }
}
