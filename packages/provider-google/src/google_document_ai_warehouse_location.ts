import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDocumentAiWarehouseLocationArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleDocumentAiWarehouseLocationArgs {
  access_control_mode: string;
  database_type: string;
  document_creator_default_role?: string;
  kms_key?: string;
  location: string;
  project_number: string;
  timeouts?: GoogleDocumentAiWarehouseLocationArgsTimeouts;
}

export class google_document_ai_warehouse_location extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleDocumentAiWarehouseLocationArgs) {
    super(config, "resource", args, resourceName, "google_document_ai_warehouse_location");
  }
}
