import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleVertexAiIndexEndpointArgsPrivateServiceConnectConfig {
  enable_private_service_connect: boolean;
  project_allowlist?: string[];
}
export interface GoogleVertexAiIndexEndpointArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleVertexAiIndexEndpointArgs {
  description?: string;
  display_name: string;
  labels?: {
    [key: string]: string;
  };
  network?: string;
  public_endpoint_enabled?: boolean;
  region?: string;
  private_service_connect_config: GoogleVertexAiIndexEndpointArgsPrivateServiceConnectConfig;
  timeouts?: GoogleVertexAiIndexEndpointArgsTimeouts;
}
export class google_vertex_ai_index_endpoint extends TerraformResource {
  readonly create_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly etag!: string;
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly public_endpoint_domain_name!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleVertexAiIndexEndpointArgs) {
    super(config, "resource", args, resourceName, "google_vertex_ai_index_endpoint");
  }
}