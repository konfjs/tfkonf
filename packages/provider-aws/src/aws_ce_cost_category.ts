import { TerraformConfig, TerraformResource } from "tfs";
export interface InheritedValue {
  dimension_key?: string;
  dimension_name?: string;
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
export interface And {
  and: And;
  cost_category: CostCategory;
  dimension: Dimension;
  not: Not;
  or: Or;
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
export interface Not {
  and: And;
  cost_category: CostCategory;
  dimension: Dimension;
  not: Not;
  or: Or;
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
export interface Or {
  and: And;
  cost_category: CostCategory;
  dimension: Dimension;
  not: Not;
  or: Or;
  tags: Tags;
}
export interface Tags {
  key?: string;
  match_options?: string[];
  values?: string[];
}
export interface Rule {
  and: And;
  cost_category: CostCategory;
  dimension: Dimension;
  not: Not;
  or: Or;
  tags: Tags;
}
export interface Rule {
  type?: string;
  value?: string;
  inherited_value: InheritedValue;
  rule: Rule;
}
export interface Parameter {
  type?: string;
  values?: string[];
}
export interface SplitChargeRule {
  method: string;
  source: string;
  targets: string[];
  parameter: Parameter;
}
export interface AwsCeCostCategoryArgs {
  default_value?: string;
  name: string;
  rule_version: string;
  tags?: {
    [key: string]: string;
  };
  rule: Rule;
  split_charge_rule: SplitChargeRule;
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