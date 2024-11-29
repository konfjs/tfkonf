import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsOamLinkArgsLinkConfigurationLogGroupConfiguration {
  filter: string;
}
export interface AwsOamLinkArgsLinkConfigurationMetricConfiguration {
  filter: string;
}
export interface AwsOamLinkArgsLinkConfiguration {
  log_group_configuration: AwsOamLinkArgsLinkConfigurationLogGroupConfiguration;
  metric_configuration: AwsOamLinkArgsLinkConfigurationMetricConfiguration;
}
export interface AwsOamLinkArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsOamLinkArgs {
  label_template: string;
  resource_types: string[];
  sink_identifier: string;
  tags?: {
    [key: string]: string;
  };
  link_configuration: AwsOamLinkArgsLinkConfiguration;
  timeouts: AwsOamLinkArgstimeouts;
}
export class aws_oam_link extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly label!: string;
  readonly link_id!: string;
  readonly sink_arn!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsOamLinkArgs) {
    super(config, "resource", args, resourceName, "aws_oam_link");
  }
}