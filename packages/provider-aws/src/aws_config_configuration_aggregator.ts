import { TerraformConfig, TerraformResource } from "tfs";
export interface AccountAggregationSource {
  account_ids: string[];
  all_regions?: boolean;
  regions?: string[];
}
export interface OrganizationAggregationSource {
  all_regions?: boolean;
  regions?: string[];
  role_arn: string;
}
export interface AwsConfigConfigurationAggregatorArgs {
  name: string;
  tags?: {
    [key: string]: string;
  };
  account_aggregation_source: AccountAggregationSource;
  organization_aggregation_source: OrganizationAggregationSource;
}
export class aws_config_configuration_aggregator extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsConfigConfigurationAggregatorArgs) {
    super(config, "resource", args, resourceName, "aws_config_configuration_aggregator");
  }
}