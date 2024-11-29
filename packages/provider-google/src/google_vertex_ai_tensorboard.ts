import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleVertexAiTensorboardArgsEncryptionSpec {
  kms_key_name: string;
}
export interface GoogleVertexAiTensorboardArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleVertexAiTensorboardArgs {
  description?: string;
  display_name: string;
  labels?: {
    [key: string]: string;
  };
  encryption_spec: GoogleVertexAiTensorboardArgsEncryptionSpec;
  timeouts: GoogleVertexAiTensorboardArgsTimeouts;
}
export class google_vertex_ai_tensorboard extends TerraformResource {
  readonly blob_storage_path_prefix!: string;
  readonly create_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly region?: string;
  readonly run_count!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleVertexAiTensorboardArgs) {
    super(config, "resource", args, resourceName, "google_vertex_ai_tensorboard");
  }
}