import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleFirestoreIndexArgsfieldsVectorConfigflat {}
export interface GoogleFirestoreIndexArgsfieldsVectorConfig {
  dimension?: number;
  flat: GoogleFirestoreIndexArgsfieldsVectorConfigflat;
}
export interface GoogleFirestoreIndexArgsfields {
  array_config?: string;
  field_path?: string;
  order?: string;
  vector_config: GoogleFirestoreIndexArgsfieldsVectorConfig;
}
export interface GoogleFirestoreIndexArgstimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleFirestoreIndexArgs {
  api_scope?: string;
  collection: string;
  database?: string;
  query_scope?: string;
  fields: GoogleFirestoreIndexArgsfields;
  timeouts: GoogleFirestoreIndexArgstimeouts;
}
export class google_firestore_index extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleFirestoreIndexArgs) {
    super(config, "resource", args, resourceName, "google_firestore_index");
  }
}