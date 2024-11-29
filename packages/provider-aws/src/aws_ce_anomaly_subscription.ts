import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsCeAnomalySubscriptionArgsSubscriber {
  address: string;
  type: string;
}
export interface AwsCeAnomalySubscriptionArgsThresholdExpressionAndCostCategory {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeAnomalySubscriptionArgsThresholdExpressionAndDimension {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeAnomalySubscriptionArgsThresholdExpressionAndTags {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeAnomalySubscriptionArgsThresholdExpressionAnd {
  cost_category: AwsCeAnomalySubscriptionArgsThresholdExpressionAndCostCategory;
  dimension: AwsCeAnomalySubscriptionArgsThresholdExpressionAndDimension;
  tags: AwsCeAnomalySubscriptionArgsThresholdExpressionAndTags;
}
export interface AwsCeAnomalySubscriptionArgsThresholdExpressionCostCategory {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeAnomalySubscriptionArgsThresholdExpressionDimension {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeAnomalySubscriptionArgsThresholdExpressionNotCostCategory {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeAnomalySubscriptionArgsThresholdExpressionNotDimension {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeAnomalySubscriptionArgsThresholdExpressionNotTags {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeAnomalySubscriptionArgsThresholdExpressionNot {
  cost_category: AwsCeAnomalySubscriptionArgsThresholdExpressionNotCostCategory;
  dimension: AwsCeAnomalySubscriptionArgsThresholdExpressionNotDimension;
  tags: AwsCeAnomalySubscriptionArgsThresholdExpressionNotTags;
}
export interface AwsCeAnomalySubscriptionArgsThresholdExpressionOrCostCategory {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeAnomalySubscriptionArgsThresholdExpressionOrDimension {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeAnomalySubscriptionArgsThresholdExpressionOrTags {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeAnomalySubscriptionArgsThresholdExpressionOr {
  cost_category: AwsCeAnomalySubscriptionArgsThresholdExpressionOrCostCategory;
  dimension: AwsCeAnomalySubscriptionArgsThresholdExpressionOrDimension;
  tags: AwsCeAnomalySubscriptionArgsThresholdExpressionOrTags;
}
export interface AwsCeAnomalySubscriptionArgsThresholdExpressionTags {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeAnomalySubscriptionArgsThresholdExpression {
  and: AwsCeAnomalySubscriptionArgsThresholdExpressionAnd;
  cost_category: AwsCeAnomalySubscriptionArgsThresholdExpressionCostCategory;
  dimension: AwsCeAnomalySubscriptionArgsThresholdExpressionDimension;
  not: AwsCeAnomalySubscriptionArgsThresholdExpressionNot;
  or: AwsCeAnomalySubscriptionArgsThresholdExpressionOr;
  tags: AwsCeAnomalySubscriptionArgsThresholdExpressionTags;
}
export interface AwsCeAnomalySubscriptionArgs {
  frequency: string;
  monitor_arn_list: string[];
  name: string;
  tags?: {
    [key: string]: string;
  };
  subscriber: AwsCeAnomalySubscriptionArgsSubscriber;
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