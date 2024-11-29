import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsServicecatalogServiceActionArgsdefinition {
  assume_role?: string;
  name: string;
  parameters?: string;
  type?: string;
  version: string;
}
export interface AwsServicecatalogServiceActionArgstimeouts {
  create?: string;
  delete?: string;
  read?: string;
  update?: string;
}
export interface AwsServicecatalogServiceActionArgs {
  accept_language?: string;
  name: string;
  definition: AwsServicecatalogServiceActionArgsdefinition;
  timeouts: AwsServicecatalogServiceActionArgstimeouts;
}
export class aws_servicecatalog_service_action extends TerraformResource {
  readonly description?: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsServicecatalogServiceActionArgs) {
    super(config, "resource", args, resourceName, "aws_servicecatalog_service_action");
  }
}