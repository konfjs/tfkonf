import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsSagemakerServicecatalogPortfolioStatusArgs {
  status: string;
}
export class aws_sagemaker_servicecatalog_portfolio_status extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSagemakerServicecatalogPortfolioStatusArgs) {
    super(config, "resource", args, resourceName, "aws_sagemaker_servicecatalog_portfolio_status");
  }
}