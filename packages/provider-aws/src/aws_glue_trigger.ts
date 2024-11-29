import { TerraformConfig, TerraformResource } from "tfs";
export interface NotificationProperty {
  notify_delay_after?: number;
}
export interface Actions {
  arguments?: {
    [key: string]: string;
  };
  crawler_name?: string;
  job_name?: string;
  security_configuration?: string;
  timeout?: number;
  notification_property: NotificationProperty;
}
export interface EventBatchingCondition {
  batch_size: number;
  batch_window?: number;
}
export interface Conditions {
  crawl_state?: string;
  crawler_name?: string;
  job_name?: string;
  logical_operator?: string;
  state?: string;
}
export interface Predicate {
  logical?: string;
  conditions: Conditions;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsGlueTriggerArgs {
  description?: string;
  enabled?: boolean;
  name: string;
  schedule?: string;
  start_on_creation?: boolean;
  tags?: {
    [key: string]: string;
  };
  type: string;
  workflow_name?: string;
  actions: Actions;
  event_batching_condition: EventBatchingCondition;
  predicate: Predicate;
  timeouts: Timeouts;
}
export class aws_glue_trigger extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly state!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsGlueTriggerArgs) {
    super(config, "resource", args, resourceName, "aws_glue_trigger");
  }
}