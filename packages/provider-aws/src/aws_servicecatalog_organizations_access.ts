import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsServicecatalogOrganizationsAccessArgsTimeouts {
  read?: string;
}
export interface AwsServicecatalogOrganizationsAccessArgs {
  enabled: boolean;
  timeouts: AwsServicecatalogOrganizationsAccessArgsTimeouts;
}
export class aws_servicecatalog_organizations_access extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsServicecatalogOrganizationsAccessArgs) {
    super(config, "resource", args, resourceName, "aws_servicecatalog_organizations_access");
  }
}