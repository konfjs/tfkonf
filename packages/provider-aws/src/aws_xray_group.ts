import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsXrayGroupArgsInsightsConfiguration {
  insights_enabled: boolean;
}
export interface AwsXrayGroupArgs {
  filter_expression: string;
  group_name: string;
  tags?: {
    [key: string]: string;
  };
  insights_configuration: AwsXrayGroupArgsInsightsConfiguration;
}
export class aws_xray_group extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsXrayGroupArgs) {
    super(config, "resource", args, resourceName, "aws_xray_group");
  }
}