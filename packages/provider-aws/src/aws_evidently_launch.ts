import { TerraformConfig, TerraformResource } from "tfs";
export interface Groups {
  description?: string;
  feature: string;
  name: string;
  variation: string;
}
export interface MetricDefinition {
  entity_id_key: string;
  event_pattern?: string;
  name: string;
  unit_label?: string;
  value_key: string;
}
export interface MetricMonitors {
  metric_definition: MetricDefinition;
}
export interface SegmentOverrides {
  evaluation_order: number;
  segment: string;
  weights: {
    [key: string]: number;
  };
}
export interface Steps {
  group_weights: {
    [key: string]: number;
  };
  start_time: string;
  segment_overrides: SegmentOverrides;
}
export interface ScheduledSplitsConfig {
  steps: Steps;
}
export interface Timeouts {
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
  groups: Groups;
  metric_monitors: MetricMonitors;
  scheduled_splits_config: ScheduledSplitsConfig;
  timeouts: Timeouts;
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