import { TerraformConfig, TerraformResource } from "tfs";
export interface FieldToMatch {
  data?: string;
  type: string;
}
export interface SizeConstraints {
  comparison_operator: string;
  size: number;
  text_transformation: string;
  field_to_match: FieldToMatch;
}
export interface AwsWafSizeConstraintSetArgs {
  name: string;
  size_constraints: SizeConstraints;
}
export class aws_waf_size_constraint_set extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsWafSizeConstraintSetArgs) {
    super(config, "resource", args, resourceName, "aws_waf_size_constraint_set");
  }
}