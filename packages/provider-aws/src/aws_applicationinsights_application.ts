import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsApplicationinsightsApplicationArgs {
  auto_config_enabled?: boolean;
  auto_create?: boolean;
  cwe_monitor_enabled?: boolean;
  grouping_type?: string;
  ops_center_enabled?: boolean;
  ops_item_sns_topic_arn?: string;
  resource_group_name: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_applicationinsights_application extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsApplicationinsightsApplicationArgs) {
    super(config, "resource", args, resourceName, "aws_applicationinsights_application");
  }
}