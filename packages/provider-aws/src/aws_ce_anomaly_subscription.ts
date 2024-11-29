import { TerraformConfig, TerraformResource } from "tfs";
export interface Subscriber {
  address: string;
  type: string;
}
export interface CostCategory {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface Dimension {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface Tags {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface And {
  cost_category: CostCategory;
  dimension: Dimension;
  tags: Tags;
}
export interface CostCategory {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface Dimension {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface CostCategory {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface Dimension {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface Tags {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface Not {
  cost_category: CostCategory;
  dimension: Dimension;
  tags: Tags;
}
export interface CostCategory {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface Dimension {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface Tags {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface Or {
  cost_category: CostCategory;
  dimension: Dimension;
  tags: Tags;
}
export interface Tags {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface ThresholdExpression {
  and: And;
  cost_category: CostCategory;
  dimension: Dimension;
  not: Not;
  or: Or;
  tags: Tags;
}
export interface AwsCeAnomalySubscriptionArgs {
  frequency: string;
  monitor_arn_list: string[];
  name: string;
  tags?: {
    [key: string]: string;
  };
  subscriber: Subscriber;
  threshold_expression: ThresholdExpression;
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