import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsCeAnomalySubscriptionArgssubscriber {
  address: string;
  type: string;
}
export interface AwsCeAnomalySubscriptionArgsThresholdExpressionandCostCategory {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeAnomalySubscriptionArgsThresholdExpressionanddimension {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeAnomalySubscriptionArgsThresholdExpressionandtags {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeAnomalySubscriptionArgsThresholdExpressionand {
  cost_category: AwsCeAnomalySubscriptionArgsThresholdExpressionandCostCategory;
  dimension: AwsCeAnomalySubscriptionArgsThresholdExpressionanddimension;
  tags: AwsCeAnomalySubscriptionArgsThresholdExpressionandtags;
}
export interface AwsCeAnomalySubscriptionArgsThresholdExpressionCostCategory {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeAnomalySubscriptionArgsThresholdExpressiondimension {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeAnomalySubscriptionArgsThresholdExpressionnotCostCategory {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeAnomalySubscriptionArgsThresholdExpressionnotdimension {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeAnomalySubscriptionArgsThresholdExpressionnottags {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeAnomalySubscriptionArgsThresholdExpressionnot {
  cost_category: AwsCeAnomalySubscriptionArgsThresholdExpressionnotCostCategory;
  dimension: AwsCeAnomalySubscriptionArgsThresholdExpressionnotdimension;
  tags: AwsCeAnomalySubscriptionArgsThresholdExpressionnottags;
}
export interface AwsCeAnomalySubscriptionArgsThresholdExpressionorCostCategory {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeAnomalySubscriptionArgsThresholdExpressionordimension {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeAnomalySubscriptionArgsThresholdExpressionortags {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeAnomalySubscriptionArgsThresholdExpressionor {
  cost_category: AwsCeAnomalySubscriptionArgsThresholdExpressionorCostCategory;
  dimension: AwsCeAnomalySubscriptionArgsThresholdExpressionordimension;
  tags: AwsCeAnomalySubscriptionArgsThresholdExpressionortags;
}
export interface AwsCeAnomalySubscriptionArgsThresholdExpressiontags {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeAnomalySubscriptionArgsThresholdExpression {
  and: AwsCeAnomalySubscriptionArgsThresholdExpressionand;
  cost_category: AwsCeAnomalySubscriptionArgsThresholdExpressionCostCategory;
  dimension: AwsCeAnomalySubscriptionArgsThresholdExpressiondimension;
  not: AwsCeAnomalySubscriptionArgsThresholdExpressionnot;
  or: AwsCeAnomalySubscriptionArgsThresholdExpressionor;
  tags: AwsCeAnomalySubscriptionArgsThresholdExpressiontags;
}
export interface AwsCeAnomalySubscriptionArgs {
  frequency: string;
  monitor_arn_list: string[];
  name: string;
  tags?: {
    [key: string]: string;
  };
  subscriber: AwsCeAnomalySubscriptionArgssubscriber;
  threshold_expression: AwsCeAnomalySubscriptionArgsThresholdExpression;
}
export class aws_ce_anomaly_subscription extends TerraformResource {
  readonly account_id?: string;
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsCeAnomalySubscriptionArgs) {
    super(config, "resource", args, resourceName, "aws_ce_anomaly_subscription");
  }
}