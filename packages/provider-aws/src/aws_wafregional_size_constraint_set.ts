import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsWafregionalSizeConstraintSetArgsSizeConstraintsFieldToMatch {
  data?: string;
  type: string;
}

export interface AwsWafregionalSizeConstraintSetArgsSizeConstraints {
  comparison_operator: string;
  size: number;
  text_transformation: string;
  field_to_match: AwsWafregionalSizeConstraintSetArgsSizeConstraintsFieldToMatch;
}

export interface AwsWafregionalSizeConstraintSetArgs {
  name: string;
  size_constraints: AwsWafregionalSizeConstraintSetArgsSizeConstraints;
}

export class aws_wafregional_size_constraint_set extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsWafregionalSizeConstraintSetArgs) {
    super(config, "resource", args, resourceName, "aws_wafregional_size_constraint_set");
  }
}
