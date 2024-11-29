import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleBigtableAuthorizedViewArgsSubsetViewFamilySubsets {
  family_name: string;
  qualifier_prefixes?: string[];
  qualifiers?: string[];
}
export interface GoogleBigtableAuthorizedViewArgsSubsetView {
  row_prefixes?: string[];
  family_subsets: GoogleBigtableAuthorizedViewArgsSubsetViewFamilySubsets;
}
export interface GoogleBigtableAuthorizedViewArgstimeouts {
  create?: string;
  update?: string;
}
export interface GoogleBigtableAuthorizedViewArgs {
  instance_name: string;
  name: string;
  table_name: string;
  subset_view: GoogleBigtableAuthorizedViewArgsSubsetView;
  timeouts: GoogleBigtableAuthorizedViewArgstimeouts;
}
export class google_bigtable_authorized_view extends TerraformResource {
  readonly deletion_protection?: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleBigtableAuthorizedViewArgs) {
    super(config, "resource", args, resourceName, "google_bigtable_authorized_view");
  }
}