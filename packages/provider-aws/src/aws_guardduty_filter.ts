import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsGuarddutyFilterArgsFindingCriteriaCriterion {
  equals?: string[];
  field: string;
  greater_than?: string;
  greater_than_or_equal?: string;
  less_than?: string;
  less_than_or_equal?: string;
  not_equals?: string[];
}
export interface AwsGuarddutyFilterArgsFindingCriteria {
  criterion: AwsGuarddutyFilterArgsFindingCriteriaCriterion;
}
export interface AwsGuarddutyFilterArgs {
  action: string;
  description?: string;
  detector_id: string;
  name: string;
  rank: number;
  tags?: {
    [key: string]: string;
  };
  finding_criteria: AwsGuarddutyFilterArgsFindingCriteria;
}
export class aws_guardduty_filter extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsGuarddutyFilterArgs) {
    super(config, "resource", args, resourceName, "aws_guardduty_filter");
  }
}