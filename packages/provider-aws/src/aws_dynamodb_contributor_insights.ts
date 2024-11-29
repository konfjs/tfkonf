import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsDynamodbContributorInsightsArgstimeouts {
  create?: string;
  delete?: string;
}
export interface AwsDynamodbContributorInsightsArgs {
  index_name?: string;
  table_name: string;
  timeouts: AwsDynamodbContributorInsightsArgstimeouts;
}
export class aws_dynamodb_contributor_insights extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDynamodbContributorInsightsArgs) {
    super(config, "resource", args, resourceName, "aws_dynamodb_contributor_insights");
  }
}