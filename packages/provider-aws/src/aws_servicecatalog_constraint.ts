import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsServicecatalogConstraintArgstimeouts {
  create?: string;
  delete?: string;
  read?: string;
  update?: string;
}
export interface AwsServicecatalogConstraintArgs {
  accept_language?: string;
  parameters: string;
  portfolio_id: string;
  product_id: string;
  type: string;
  timeouts: AwsServicecatalogConstraintArgstimeouts;
}
export class aws_servicecatalog_constraint extends TerraformResource {
  readonly description?: string;
  readonly id?: string;
  readonly owner!: string;
  readonly status!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsServicecatalogConstraintArgs) {
    super(config, "resource", args, resourceName, "aws_servicecatalog_constraint");
  }
}