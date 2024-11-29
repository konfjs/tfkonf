import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
  read?: string;
}
export interface AwsServicecatalogPrincipalPortfolioAssociationArgs {
  accept_language?: string;
  portfolio_id: string;
  principal_arn: string;
  principal_type?: string;
  timeouts: Timeouts;
}
export class aws_servicecatalog_principal_portfolio_association extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsServicecatalogPrincipalPortfolioAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_servicecatalog_principal_portfolio_association");
  }
}