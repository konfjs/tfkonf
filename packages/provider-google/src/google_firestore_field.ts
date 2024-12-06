import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleFirestoreFieldArgsIndexConfigIndexes {
  array_config?: string;
  order?: string;
  query_scope?: string;
}

export interface GoogleFirestoreFieldArgsIndexConfig {
  indexes: GoogleFirestoreFieldArgsIndexConfigIndexes;
}

export interface GoogleFirestoreFieldArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleFirestoreFieldArgsTtlConfig {
}

export interface GoogleFirestoreFieldArgs {
  collection: string;
  database?: string;
  field: string;
  index_config: GoogleFirestoreFieldArgsIndexConfig;
  timeouts?: GoogleFirestoreFieldArgsTimeouts;
  ttl_config: GoogleFirestoreFieldArgsTtlConfig;
}

export class google_firestore_field extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleFirestoreFieldArgs) {
    super(config, "resource", args, resourceName, "google_firestore_field");
  }
}
