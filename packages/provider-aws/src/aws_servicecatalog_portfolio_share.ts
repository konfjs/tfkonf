import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsServicecatalogPortfolioShareArgsTimeouts {
  create?: string;
  delete?: string;
  read?: string;
  update?: string;
}

export interface AwsServicecatalogPortfolioShareArgs {
  accept_language?: string;
  portfolio_id: string;
  principal_id: string;
  share_principals?: boolean;
  share_tag_options?: boolean;
  type: string;
  wait_for_acceptance?: boolean;
  timeouts?: AwsServicecatalogPortfolioShareArgsTimeouts;
}

export class aws_servicecatalog_portfolio_share extends TerraformResource {
  readonly accepted!: boolean;
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsServicecatalogPortfolioShareArgs) {
    super(config, "resource", args, resourceName, "aws_servicecatalog_portfolio_share");
  }
}
