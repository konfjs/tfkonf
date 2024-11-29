import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsCeCostCategoryArgsruleInheritedValue {
  dimension_key?: string;
  dimension_name?: string;
}
export interface AwsCeCostCategoryArgsruleruleandandCostCategory {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsruleruleandanddimension {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsruleruleandandtags {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsruleruleandand {
  cost_category: AwsCeCostCategoryArgsruleruleandandCostCategory;
  dimension: AwsCeCostCategoryArgsruleruleandanddimension;
  tags: AwsCeCostCategoryArgsruleruleandandtags;
}
export interface AwsCeCostCategoryArgsruleruleandCostCategory {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsruleruleanddimension {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsruleruleandnotCostCategory {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsruleruleandnotdimension {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsruleruleandnottags {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsruleruleandnot {
  cost_category: AwsCeCostCategoryArgsruleruleandnotCostCategory;
  dimension: AwsCeCostCategoryArgsruleruleandnotdimension;
  tags: AwsCeCostCategoryArgsruleruleandnottags;
}
export interface AwsCeCostCategoryArgsruleruleandorCostCategory {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsruleruleandordimension {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsruleruleandortags {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsruleruleandor {
  cost_category: AwsCeCostCategoryArgsruleruleandorCostCategory;
  dimension: AwsCeCostCategoryArgsruleruleandordimension;
  tags: AwsCeCostCategoryArgsruleruleandortags;
}
export interface AwsCeCostCategoryArgsruleruleandtags {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsruleruleand {
  and: AwsCeCostCategoryArgsruleruleandand;
  cost_category: AwsCeCostCategoryArgsruleruleandCostCategory;
  dimension: AwsCeCostCategoryArgsruleruleanddimension;
  not: AwsCeCostCategoryArgsruleruleandnot;
  or: AwsCeCostCategoryArgsruleruleandor;
  tags: AwsCeCostCategoryArgsruleruleandtags;
}
export interface AwsCeCostCategoryArgsruleruleCostCategory {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsruleruledimension {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsrulerulenotandCostCategory {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsrulerulenotanddimension {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsrulerulenotandtags {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsrulerulenotand {
  cost_category: AwsCeCostCategoryArgsrulerulenotandCostCategory;
  dimension: AwsCeCostCategoryArgsrulerulenotanddimension;
  tags: AwsCeCostCategoryArgsrulerulenotandtags;
}
export interface AwsCeCostCategoryArgsrulerulenotCostCategory {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsrulerulenotdimension {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsrulerulenotnotCostCategory {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsrulerulenotnotdimension {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsrulerulenotnottags {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsrulerulenotnot {
  cost_category: AwsCeCostCategoryArgsrulerulenotnotCostCategory;
  dimension: AwsCeCostCategoryArgsrulerulenotnotdimension;
  tags: AwsCeCostCategoryArgsrulerulenotnottags;
}
export interface AwsCeCostCategoryArgsrulerulenotorCostCategory {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsrulerulenotordimension {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsrulerulenotortags {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsrulerulenotor {
  cost_category: AwsCeCostCategoryArgsrulerulenotorCostCategory;
  dimension: AwsCeCostCategoryArgsrulerulenotordimension;
  tags: AwsCeCostCategoryArgsrulerulenotortags;
}
export interface AwsCeCostCategoryArgsrulerulenottags {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsrulerulenot {
  and: AwsCeCostCategoryArgsrulerulenotand;
  cost_category: AwsCeCostCategoryArgsrulerulenotCostCategory;
  dimension: AwsCeCostCategoryArgsrulerulenotdimension;
  not: AwsCeCostCategoryArgsrulerulenotnot;
  or: AwsCeCostCategoryArgsrulerulenotor;
  tags: AwsCeCostCategoryArgsrulerulenottags;
}
export interface AwsCeCostCategoryArgsruleruleorandCostCategory {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsruleruleoranddimension {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsruleruleorandtags {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsruleruleorand {
  cost_category: AwsCeCostCategoryArgsruleruleorandCostCategory;
  dimension: AwsCeCostCategoryArgsruleruleoranddimension;
  tags: AwsCeCostCategoryArgsruleruleorandtags;
}
export interface AwsCeCostCategoryArgsruleruleorCostCategory {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsruleruleordimension {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsruleruleornotCostCategory {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsruleruleornotdimension {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsruleruleornottags {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsruleruleornot {
  cost_category: AwsCeCostCategoryArgsruleruleornotCostCategory;
  dimension: AwsCeCostCategoryArgsruleruleornotdimension;
  tags: AwsCeCostCategoryArgsruleruleornottags;
}
export interface AwsCeCostCategoryArgsruleruleororCostCategory {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsruleruleorordimension {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsruleruleorortags {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsruleruleoror {
  cost_category: AwsCeCostCategoryArgsruleruleororCostCategory;
  dimension: AwsCeCostCategoryArgsruleruleorordimension;
  tags: AwsCeCostCategoryArgsruleruleorortags;
}
export interface AwsCeCostCategoryArgsruleruleortags {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsruleruleor {
  and: AwsCeCostCategoryArgsruleruleorand;
  cost_category: AwsCeCostCategoryArgsruleruleorCostCategory;
  dimension: AwsCeCostCategoryArgsruleruleordimension;
  not: AwsCeCostCategoryArgsruleruleornot;
  or: AwsCeCostCategoryArgsruleruleoror;
  tags: AwsCeCostCategoryArgsruleruleortags;
}
export interface AwsCeCostCategoryArgsruleruletags {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface AwsCeCostCategoryArgsrulerule {
  and: AwsCeCostCategoryArgsruleruleand;
  cost_category: AwsCeCostCategoryArgsruleruleCostCategory;
  dimension: AwsCeCostCategoryArgsruleruledimension;
  not: AwsCeCostCategoryArgsrulerulenot;
  or: AwsCeCostCategoryArgsruleruleor;
  tags: AwsCeCostCategoryArgsruleruletags;
}
export interface AwsCeCostCategoryArgsrule {
  type?: string;
  value?: string;
  inherited_value: AwsCeCostCategoryArgsruleInheritedValue;
  rule: AwsCeCostCategoryArgsrulerule;
}
export interface AwsCeCostCategoryArgsSplitChargeRuleparameter {
  type?: string;
  values?: string[];
}
export interface AwsCeCostCategoryArgsSplitChargeRule {
  method: string;
  source: string;
  targets: string[];
  parameter: AwsCeCostCategoryArgsSplitChargeRuleparameter;
}
export interface AwsCeCostCategoryArgs {
  default_value?: string;
  name: string;
  rule_version: string;
  tags?: {
    [key: string]: string;
  };
  rule: AwsCeCostCategoryArgsrule;
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