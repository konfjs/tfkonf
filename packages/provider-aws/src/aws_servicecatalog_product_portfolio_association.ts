import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsServicecatalogProductPortfolioAssociationArgsTimeouts {
  create?: string;
  delete?: string;
  read?: string;
}
export interface AwsServicecatalogProductPortfolioAssociationArgs {
  accept_language?: string;
  portfolio_id: string;
  product_id: string;
  source_portfolio_id?: string;
  timeouts?: AwsServicecatalogProductPortfolioAssociationArgsTimeouts;
}
export class aws_servicecatalog_product_portfolio_association extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsServicecatalogProductPortfolioAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_servicecatalog_product_portfolio_association");
  }
}