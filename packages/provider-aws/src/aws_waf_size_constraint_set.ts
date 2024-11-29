import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsWafSizeConstraintSetArgsSizeConstraintsFieldToMatch {
  data?: string;
  type: string;
}
export interface AwsWafSizeConstraintSetArgsSizeConstraints {
  comparison_operator: string;
  size: number;
  text_transformation: string;
  field_to_match: AwsWafSizeConstraintSetArgsSizeConstraintsFieldToMatch;
}
export interface AwsWafSizeConstraintSetArgs {
  name: string;
  size_constraints: AwsWafSizeConstraintSetArgsSizeConstraints;
}
export class aws_waf_size_constraint_set extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsWafSizeConstraintSetArgs) {
    super(config, "resource", args, resourceName, "aws_waf_size_constraint_set");
  }
}