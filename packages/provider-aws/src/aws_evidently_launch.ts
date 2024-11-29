import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsEvidentlyLaunchArgsGroups {
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
export interface AwsEvidentlyLaunchArgsScheduledSplitsConfigStepsSegmentOverrides {
  evaluation_order: number;
  segment: string;
  weights: {
    [key: string]: number;
  };
}
export interface AwsEvidentlyLaunchArgsScheduledSplitsConfigSteps {
  group_weights: {
    [key: string]: number;
  };
  start_time: string;
  segment_overrides: AwsEvidentlyLaunchArgsScheduledSplitsConfigStepsSegmentOverrides;
}
export interface AwsEvidentlyLaunchArgsScheduledSplitsConfig {
  steps: AwsEvidentlyLaunchArgsScheduledSplitsConfigSteps;
}
export interface AwsEvidentlyLaunchArgsTimeouts {
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
  groups: AwsEvidentlyLaunchArgsGroups;
  metric_monitors: AwsEvidentlyLaunchArgsMetricMonitors;
  scheduled_splits_config: AwsEvidentlyLaunchArgsScheduledSplitsConfig;
  timeouts: AwsEvidentlyLaunchArgsTimeouts;
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