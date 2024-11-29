import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleFirestoreIndexArgsFieldsVectorConfigFlat {}
export interface GoogleFirestoreIndexArgsFieldsVectorConfig {
  dimension?: number;
  flat: GoogleFirestoreIndexArgsFieldsVectorConfigFlat;
}
export interface GoogleFirestoreIndexArgsFields {
  array_config?: string;
  field_path?: string;
  order?: string;
  vector_config: GoogleFirestoreIndexArgsFieldsVectorConfig;
}
export interface GoogleFirestoreIndexArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleFirestoreIndexArgs {
  api_scope?: string;
  collection: string;
  database?: string;
  query_scope?: string;
  fields: GoogleFirestoreIndexArgsFields;
  timeouts?: GoogleFirestoreIndexArgsTimeouts;
}
export class google_firestore_index extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleFirestoreIndexArgs) {
    super(config, "resource", args, resourceName, "google_firestore_index");
  }
}