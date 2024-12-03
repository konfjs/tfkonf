import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleVertexAiDatasetArgsEncryptionSpec {
  kms_key_name?: string;
}
export interface GoogleVertexAiDatasetArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleVertexAiDatasetArgs {
  display_name: string;
  labels?: {
    [key: string]: string;
  };
  metadata_schema_uri: string;
  encryption_spec: GoogleVertexAiDatasetArgsEncryptionSpec;
  timeouts?: GoogleVertexAiDatasetArgsTimeouts;
}
export class google_vertex_ai_dataset extends TerraformResource {
  readonly create_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly region?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleVertexAiDatasetArgs) {
    super(config, "resource", args, resourceName, "google_vertex_ai_dataset");
  }
}