import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsEvidentlyLaunchArgsgroups {
  description?: string;
  feature: string;
  name: string;
  variation: string;
}
export interface AwsEvidentlyLaunchArgsMetricMonitorsMetricDefinition {
  entity_id_key: string;
  event_pattern?: string;
  name: string;
  unit_label?: string;
  value_key: string;
}
export interface AwsEvidentlyLaunchArgsMetricMonitors {
  metric_definition: AwsEvidentlyLaunchArgsMetricMonitorsMetricDefinition;
}
export interface AwsEvidentlyLaunchArgsScheduledSplitsConfigstepsSegmentOverrides {
  evaluation_order: number;
  segment: string;
  weights: {
    [key: string]: number;
  };
}
export interface AwsEvidentlyLaunchArgsScheduledSplitsConfigsteps {
  group_weights: {
    [key: string]: number;
  };
  start_time: string;
  segment_overrides: AwsEvidentlyLaunchArgsScheduledSplitsConfigstepsSegmentOverrides;
}
export interface AwsEvidentlyLaunchArgsScheduledSplitsConfig {
  steps: AwsEvidentlyLaunchArgsScheduledSplitsConfigsteps;
}
export interface AwsEvidentlyLaunchArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsEvidentlyLaunchArgs {
  description?: string;
  name: string;
  project: string;
  randomization_salt?: string;
  tags?: {
    [key: string]: string;
  };
  groups: AwsEvidentlyLaunchArgsgroups;
  metric_monitors: AwsEvidentlyLaunchArgsMetricMonitors;
  scheduled_splits_config: AwsEvidentlyLaunchArgsScheduledSplitsConfig;
  timeouts: AwsEvidentlyLaunchArgstimeouts;
}
export class aws_evidently_launch extends TerraformResource {
  readonly arn!: string;
  readonly created_time!: string;
  readonly execution!: any[];
  readonly id?: string;
  readonly last_updated_time!: string;
  readonly status!: string;
  readonly status_reason!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly type!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEvidentlyLaunchArgs) {
    super(config, "resource", args, resourceName, "aws_evidently_launch");
  }
}