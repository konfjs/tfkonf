import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsServicecatalogBudgetResourceAssociationArgsTimeouts {
  create?: string;
  delete?: string;
  read?: string;
}
export interface AwsServicecatalogBudgetResourceAssociationArgs {
  budget_name: string;
  resource_id: string;
  timeouts: AwsServicecatalogBudgetResourceAssociationArgsTimeouts;
}
export class aws_servicecatalog_budget_resource_association extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsServicecatalogBudgetResourceAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_servicecatalog_budget_resource_association");
  }
}