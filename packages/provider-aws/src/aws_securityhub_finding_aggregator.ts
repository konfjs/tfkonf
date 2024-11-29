import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsSecurityhubFindingAggregatorArgs {
  linking_mode: string;
  specified_regions?: string[];
}
export class aws_securityhub_finding_aggregator extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSecurityhubFindingAggregatorArgs) {
    super(config, "resource", args, resourceName, "aws_securityhub_finding_aggregator");
  }
}