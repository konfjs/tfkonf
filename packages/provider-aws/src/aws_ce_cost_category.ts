import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsCeCostCategoryArgsRuleInheritedValue {
  dimension_key?: string;
  dimension_name?: string;
}
export interface AwsCeCostCategoryArgsRuleRuleAndAndCostCategory {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsRuleRuleAndAndDimension {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsRuleRuleAndAndTags {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsRuleRuleAndAnd {
  cost_category: AwsCeCostCategoryArgsRuleRuleAndAndCostCategory;
  dimension: AwsCeCostCategoryArgsRuleRuleAndAndDimension;
  tags: AwsCeCostCategoryArgsRuleRuleAndAndTags;
}
export interface AwsCeCostCategoryArgsRuleRuleAndCostCategory {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsRuleRuleAndDimension {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsRuleRuleAndNotCostCategory {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsRuleRuleAndNotDimension {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsRuleRuleAndNotTags {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsRuleRuleAndNot {
  cost_category: AwsCeCostCategoryArgsRuleRuleAndNotCostCategory;
  dimension: AwsCeCostCategoryArgsRuleRuleAndNotDimension;
  tags: AwsCeCostCategoryArgsRuleRuleAndNotTags;
}
export interface AwsCeCostCategoryArgsRuleRuleAndOrCostCategory {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsRuleRuleAndOrDimension {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsRuleRuleAndOrTags {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsRuleRuleAndOr {
  cost_category: AwsCeCostCategoryArgsRuleRuleAndOrCostCategory;
  dimension: AwsCeCostCategoryArgsRuleRuleAndOrDimension;
  tags: AwsCeCostCategoryArgsRuleRuleAndOrTags;
}
export interface AwsCeCostCategoryArgsRuleRuleAndTags {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsRuleRuleAnd {
  and: AwsCeCostCategoryArgsRuleRuleAndAnd;
  cost_category: AwsCeCostCategoryArgsRuleRuleAndCostCategory;
  dimension: AwsCeCostCategoryArgsRuleRuleAndDimension;
  not: AwsCeCostCategoryArgsRuleRuleAndNot;
  or: AwsCeCostCategoryArgsRuleRuleAndOr;
  tags: AwsCeCostCategoryArgsRuleRuleAndTags;
}
export interface AwsCeCostCategoryArgsRuleRuleCostCategory {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsRuleRuleDimension {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsRuleRuleNotAndCostCategory {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsRuleRuleNotAndDimension {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsRuleRuleNotAndTags {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsRuleRuleNotAnd {
  cost_category: AwsCeCostCategoryArgsRuleRuleNotAndCostCategory;
  dimension: AwsCeCostCategoryArgsRuleRuleNotAndDimension;
  tags: AwsCeCostCategoryArgsRuleRuleNotAndTags;
}
export interface AwsCeCostCategoryArgsRuleRuleNotCostCategory {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsRuleRuleNotDimension {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsRuleRuleNotNotCostCategory {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsRuleRuleNotNotDimension {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsRuleRuleNotNotTags {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsRuleRuleNotNot {
  cost_category: AwsCeCostCategoryArgsRuleRuleNotNotCostCategory;
  dimension: AwsCeCostCategoryArgsRuleRuleNotNotDimension;
  tags: AwsCeCostCategoryArgsRuleRuleNotNotTags;
}
export interface AwsCeCostCategoryArgsRuleRuleNotOrCostCategory {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsRuleRuleNotOrDimension {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsRuleRuleNotOrTags {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsRuleRuleNotOr {
  cost_category: AwsCeCostCategoryArgsRuleRuleNotOrCostCategory;
  dimension: AwsCeCostCategoryArgsRuleRuleNotOrDimension;
  tags: AwsCeCostCategoryArgsRuleRuleNotOrTags;
}
export interface AwsCeCostCategoryArgsRuleRuleNotTags {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsRuleRuleNot {
  and: AwsCeCostCategoryArgsRuleRuleNotAnd;
  cost_category: AwsCeCostCategoryArgsRuleRuleNotCostCategory;
  dimension: AwsCeCostCategoryArgsRuleRuleNotDimension;
  not: AwsCeCostCategoryArgsRuleRuleNotNot;
  or: AwsCeCostCategoryArgsRuleRuleNotOr;
  tags: AwsCeCostCategoryArgsRuleRuleNotTags;
}
export interface AwsCeCostCategoryArgsRuleRuleOrAndCostCategory {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsRuleRuleOrAndDimension {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsRuleRuleOrAndTags {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsRuleRuleOrAnd {
  cost_category: AwsCeCostCategoryArgsRuleRuleOrAndCostCategory;
  dimension: AwsCeCostCategoryArgsRuleRuleOrAndDimension;
  tags: AwsCeCostCategoryArgsRuleRuleOrAndTags;
}
export interface AwsCeCostCategoryArgsRuleRuleOrCostCategory {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsRuleRuleOrDimension {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsRuleRuleOrNotCostCategory {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsRuleRuleOrNotDimension {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsRuleRuleOrNotTags {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsRuleRuleOrNot {
  cost_category: AwsCeCostCategoryArgsRuleRuleOrNotCostCategory;
  dimension: AwsCeCostCategoryArgsRuleRuleOrNotDimension;
  tags: AwsCeCostCategoryArgsRuleRuleOrNotTags;
}
export interface AwsCeCostCategoryArgsRuleRuleOrOrCostCategory {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsRuleRuleOrOrDimension {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsRuleRuleOrOrTags {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsRuleRuleOrOr {
  cost_category: AwsCeCostCategoryArgsRuleRuleOrOrCostCategory;
  dimension: AwsCeCostCategoryArgsRuleRuleOrOrDimension;
  tags: AwsCeCostCategoryArgsRuleRuleOrOrTags;
}
export interface AwsCeCostCategoryArgsRuleRuleOrTags {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsRuleRuleOr {
  and: AwsCeCostCategoryArgsRuleRuleOrAnd;
  cost_category: AwsCeCostCategoryArgsRuleRuleOrCostCategory;
  dimension: AwsCeCostCategoryArgsRuleRuleOrDimension;
  not: AwsCeCostCategoryArgsRuleRuleOrNot;
  or: AwsCeCostCategoryArgsRuleRuleOrOr;
  tags: AwsCeCostCategoryArgsRuleRuleOrTags;
}
export interface AwsCeCostCategoryArgsRuleRuleTags {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsRuleRule {
  and: AwsCeCostCategoryArgsRuleRuleAnd;
  cost_category: AwsCeCostCategoryArgsRuleRuleCostCategory;
  dimension: AwsCeCostCategoryArgsRuleRuleDimension;
  not: AwsCeCostCategoryArgsRuleRuleNot;
  or: AwsCeCostCategoryArgsRuleRuleOr;
  tags: AwsCeCostCategoryArgsRuleRuleTags;
}
export interface AwsCeCostCategoryArgsRule {
  type?: string;
  value?: string;
  inherited_value: AwsCeCostCategoryArgsRuleInheritedValue;
  rule: AwsCeCostCategoryArgsRuleRule;
}
export interface AwsCeCostCategoryArgsSplitChargeRuleParameter {
  type?: string;
  values?: string[];
}
export interface AwsCeCostCategoryArgsSplitChargeRule {
  method: string;
  source: string;
  targets: string[];
  parameter: AwsCeCostCategoryArgsSplitChargeRuleParameter;
}
export interface AwsCeCostCategoryArgs {
  default_value?: string;
  name: string;
  rule_version: string;
  tags?: {
    [key: string]: string;
  };
  rule: AwsCeCostCategoryArgsRule;
  split_charge_rule: AwsCeCostCategoryArgsSplitChargeRule;
}
export class aws_ce_cost_category extends TerraformResource {
  readonly arn!: string;
  readonly effective_end!: string;
  readonly effective_start?: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsCeCostCategoryArgs) {
    super(config, "resource", args, resourceName, "aws_ce_cost_category");
  }
}