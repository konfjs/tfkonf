import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsWafGeoMatchSetArgsGeoMatchConstraint {
  type: string;
  value: string;
}

export interface AwsWafGeoMatchSetArgs {
  name: string;
  geo_match_constraint: AwsWafGeoMatchSetArgsGeoMatchConstraint;
}

export class aws_waf_geo_match_set extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsWafGeoMatchSetArgs) {
    super(config, "resource", args, resourceName, "aws_waf_geo_match_set");
  }
}
