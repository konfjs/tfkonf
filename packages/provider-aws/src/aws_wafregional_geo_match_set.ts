import { TerraformConfig, TerraformResource } from "tfs";
export interface GeoMatchConstraint {
  type: string;
  value: string;
}
export interface AwsWafregionalGeoMatchSetArgs {
  name: string;
  geo_match_constraint: GeoMatchConstraint;
}
export class aws_wafregional_geo_match_set extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsWafregionalGeoMatchSetArgs) {
    super(config, "resource", args, resourceName, "aws_wafregional_geo_match_set");
  }
}