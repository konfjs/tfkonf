import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudwatchEventRuleArgs {
  description?: string;
  event_bus_name?: string;
  event_pattern?: string;
  force_destroy?: boolean;
  is_enabled?: boolean;
  role_arn?: string;
  schedule_expression?: string;
  state?: string;
  tags?: { [key: string]: string };
}

export class aws_cloudwatch_event_rule extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly name?: string;
  readonly name_prefix?: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudwatchEventRuleArgs) {
    super(config, "resource", args, resourceName, "aws_cloudwatch_event_rule");
  }
}
