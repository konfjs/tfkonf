import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsServicecatalogPortfolioArgsTimeouts {
  create?: string;
  delete?: string;
  read?: string;
  update?: string;
}
export interface AwsServicecatalogPortfolioArgs {
  name: string;
  provider_name: string;
  tags?: {
    [key: string]: string;
  };
  timeouts?: AwsServicecatalogPortfolioArgsTimeouts;
}
export class aws_servicecatalog_portfolio extends TerraformResource {
  readonly arn!: string;
  readonly created_time!: string;
  readonly description?: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsServicecatalogPortfolioArgs) {
    super(config, "resource", args, resourceName, "aws_servicecatalog_portfolio");
  }
}