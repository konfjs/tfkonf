import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsGlueTriggerArgsActionsNotificationProperty {
  notify_delay_after?: number;
}
export interface AwsGlueTriggerArgsActions {
  arguments?: {
    [key: string]: string;
  };
  crawler_name?: string;
  job_name?: string;
  security_configuration?: string;
  timeout?: number;
  notification_property: AwsGlueTriggerArgsActionsNotificationProperty;
}
export interface AwsGlueTriggerArgsEventBatchingCondition {
  batch_size: number;
  batch_window?: number;
}
export interface AwsGlueTriggerArgsPredicateConditions {
  crawl_state?: string;
  crawler_name?: string;
  job_name?: string;
  logical_operator?: string;
  state?: string;
}
export interface AwsGlueTriggerArgsPredicate {
  logical?: string;
  conditions: AwsGlueTriggerArgsPredicateConditions;
}
export interface AwsGlueTriggerArgsTimeouts {
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
  actions: AwsGlueTriggerArgsActions;
  event_batching_condition: AwsGlueTriggerArgsEventBatchingCondition;
  predicate: AwsGlueTriggerArgsPredicate;
  timeouts?: AwsGlueTriggerArgsTimeouts;
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