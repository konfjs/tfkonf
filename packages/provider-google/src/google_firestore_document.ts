import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleFirestoreDocumentArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleFirestoreDocumentArgs {
  collection: string;
  database?: string;
  document_id: string;
  fields: string;
  timeouts: GoogleFirestoreDocumentArgsTimeouts;
}
export class google_firestore_document extends TerraformResource {
  readonly create_time!: string;
  readonly id?: string;
  readonly name!: string;
  readonly path!: string;
  readonly project?: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleFirestoreDocumentArgs) {
    super(config, "resource", args, resourceName, "google_firestore_document");
  }
}