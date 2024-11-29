import { TerraformConfig, TerraformResource } from "tfs";
export interface LogGroupConfiguration {
  filter: string;
}
export interface MetricConfiguration {
  filter: string;
}
export interface LinkConfiguration {
  log_group_configuration: LogGroupConfiguration;
  metric_configuration: MetricConfiguration;
}
export interface Timeouts {
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
  link_configuration: LinkConfiguration;
  timeouts: Timeouts;
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