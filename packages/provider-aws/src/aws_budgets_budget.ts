import { TerraformConfig, TerraformResource } from "tfs";
export interface HistoricalOptions {
  budget_adjustment_period: number;
}
export interface AutoAdjustData {
  auto_adjust_type: string;
  historical_options: HistoricalOptions;
}
export interface CostFilter {
  name: string;
  values: string[];
}
export interface CostTypes {
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
export interface Notification {
  comparison_operator: string;
  notification_type: string;
  subscriber_email_addresses?: string[];
  subscriber_sns_topic_arns?: string[];
  threshold: number;
  threshold_type: string;
}
export interface PlannedLimit {
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
  auto_adjust_data: AutoAdjustData;
  cost_filter: CostFilter;
  cost_types: CostTypes;
  notification: Notification;
  planned_limit: PlannedLimit;
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