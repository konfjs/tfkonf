import { TerraformConfig, TerraformResource } from "tfs";
export interface FamilySubsets {
  family_name: string;
  qualifier_prefixes?: string[];
  qualifiers?: string[];
}
export interface SubsetView {
  row_prefixes?: string[];
  family_subsets: FamilySubsets;
}
export interface Timeouts {
  create?: string;
  update?: string;
}
export interface GoogleBigtableAuthorizedViewArgs {
  instance_name: string;
  name: string;
  table_name: string;
  subset_view: SubsetView;
  timeouts: Timeouts;
}
export class google_bigtable_authorized_view extends TerraformResource {
  readonly deletion_protection?: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleBigtableAuthorizedViewArgs) {
    super(config, "resource", args, resourceName, "google_bigtable_authorized_view");
  }
}