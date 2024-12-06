import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsMacie2FindingsFilterArgsFindingCriteriaCriterion {
  eq?: string[];
  eq_exact_match?: string[];
  field: string;
  gt?: string;
  gte?: string;
  lt?: string;
  lte?: string;
  neq?: string[];
}

export interface AwsMacie2FindingsFilterArgsFindingCriteria {
  criterion: AwsMacie2FindingsFilterArgsFindingCriteriaCriterion;
}

export interface AwsMacie2FindingsFilterArgs {
  action: string;
  description?: string;
  tags?: { [key: string]: string };
  finding_criteria: AwsMacie2FindingsFilterArgsFindingCriteria;
}

export class aws_macie2_findings_filter extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly name?: string;
  readonly name_prefix?: string;
  readonly position?: number;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsMacie2FindingsFilterArgs) {
    super(config, "resource", args, resourceName, "aws_macie2_findings_filter");
  }
}
