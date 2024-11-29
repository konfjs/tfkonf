import { TerraformConfig, TerraformResource } from "tfs";
export interface Flat {}
export interface VectorConfig {
  dimension?: number;
  flat: Flat;
}
export interface Fields {
  array_config?: string;
  field_path?: string;
  order?: string;
  vector_config: VectorConfig;
}
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface GoogleFirestoreIndexArgs {
  api_scope?: string;
  collection: string;
  database?: string;
  query_scope?: string;
  fields: Fields;
  timeouts: Timeouts;
}
export class google_firestore_index extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleFirestoreIndexArgs) {
    super(config, "resource", args, resourceName, "google_firestore_index");
  }
}