import { TerraformConfig, TerraformResource } from "tfs";
export interface Indexes {
  array_config?: string;
  order?: string;
  query_scope?: string;
}
export interface IndexConfig {
  indexes: Indexes;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface TtlConfig {}
export interface GoogleFirestoreFieldArgs {
  collection: string;
  database?: string;
  field: string;
  index_config: IndexConfig;
  timeouts: Timeouts;
  ttl_config: TtlConfig;
}
export class google_firestore_field extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleFirestoreFieldArgs) {
    super(config, "resource", args, resourceName, "google_firestore_field");
  }
}