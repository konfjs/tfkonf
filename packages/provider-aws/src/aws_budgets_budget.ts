import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsBudgetsBudgetArgsAutoAdjustDataHistoricalOptions {
  budget_adjustment_period: number;
}
export interface AwsBudgetsBudgetArgsAutoAdjustData {
  auto_adjust_type: string;
  historical_options: AwsBudgetsBudgetArgsAutoAdjustDataHistoricalOptions;
}
export interface AwsBudgetsBudgetArgsCostFilter {
  name: string;
  values: string[];
}
export interface AwsBudgetsBudgetArgsCostTypes {
  include_credit?: boolean;
  include_discount?: boolean;
  include_other_subscription?: boolean;
  include_recurring?: boolean;
  include_refund?: boolean;
  include_subscription?: boolean;
  include_support?: boolean;
  include_tax?: boolean;
  include_upfront?: boolean;
  use_amortized?: boolean;
  use_blended?: boolean;
}
export interface AwsBudgetsBudgetArgsnotification {
  comparison_operator: string;
  notification_type: string;
  subscriber_email_addresses?: string[];
  subscriber_sns_topic_arns?: string[];
  threshold: number;
  threshold_type: string;
}
export interface AwsBudgetsBudgetArgsPlannedLimit {
  amount: string;
  start_time: string;
  unit: string;
}
export interface AwsBudgetsBudgetArgs {
  budget_type: string;
  tags?: {
    [key: string]: string;
  };
  time_period_end?: string;
  time_unit: string;
  auto_adjust_data: AwsBudgetsBudgetArgsAutoAdjustData;
  cost_filter: AwsBudgetsBudgetArgsCostFilter;
  cost_types: AwsBudgetsBudgetArgsCostTypes;
  notification: AwsBudgetsBudgetArgsnotification;
  planned_limit: AwsBudgetsBudgetArgsPlannedLimit;
}
export class aws_budgets_budget extends TerraformResource {
  readonly account_id?: string;
  readonly arn!: string;
  readonly id?: string;
  readonly limit_amount?: string;
  readonly limit_unit?: string;
  readonly name?: string;
  readonly name_prefix?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly time_period_start?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsBudgetsBudgetArgs) {
    super(config, "resource", args, resourceName, "aws_budgets_budget");
  }
}