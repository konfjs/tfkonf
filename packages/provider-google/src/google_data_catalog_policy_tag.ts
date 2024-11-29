import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleDataCatalogPolicyTagArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDataCatalogPolicyTagArgs {
  description?: string;
  display_name: string;
  parent_policy_tag?: string;
  taxonomy: string;
  timeouts: GoogleDataCatalogPolicyTagArgstimeouts;
}
export class google_data_catalog_policy_tag extends TerraformResource {
  readonly child_policy_tags!: string[];
  readonly id?: string;
  readonly name!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataCatalogPolicyTagArgs) {
    super(config, "resource", args, resourceName, "google_data_catalog_policy_tag");
  }
}