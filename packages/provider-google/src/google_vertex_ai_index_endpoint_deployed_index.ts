import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleVertexAiIndexEndpointDeployedIndexArgsAutomaticResources {}
export interface GoogleVertexAiIndexEndpointDeployedIndexArgsDedicatedResourcesMachineSpec {
  machine_type?: string;
}
export interface GoogleVertexAiIndexEndpointDeployedIndexArgsDedicatedResources {
  min_replica_count: number;
  machine_spec: GoogleVertexAiIndexEndpointDeployedIndexArgsDedicatedResourcesMachineSpec;
}
export interface GoogleVertexAiIndexEndpointDeployedIndexArgsDeployedIndexAuthConfigAuthProvider {
  allowed_issuers?: string[];
  audiences?: string[];
}
export interface GoogleVertexAiIndexEndpointDeployedIndexArgsDeployedIndexAuthConfig {
  auth_provider: GoogleVertexAiIndexEndpointDeployedIndexArgsDeployedIndexAuthConfigAuthProvider;
}
export interface GoogleVertexAiIndexEndpointDeployedIndexArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleVertexAiIndexEndpointDeployedIndexArgs {
  deployed_index_id: string;
  deployment_group?: string;
  display_name?: string;
  enable_access_logging?: boolean;
  index: string;
  index_endpoint: string;
  reserved_ip_ranges?: string[];
  automatic_resources: GoogleVertexAiIndexEndpointDeployedIndexArgsAutomaticResources;
  dedicated_resources: GoogleVertexAiIndexEndpointDeployedIndexArgsDedicatedResources;
  deployed_index_auth_config: GoogleVertexAiIndexEndpointDeployedIndexArgsDeployedIndexAuthConfig;
  timeouts: GoogleVertexAiIndexEndpointDeployedIndexArgsTimeouts;
}
export class google_vertex_ai_index_endpoint_deployed_index extends TerraformResource {
  readonly create_time!: string;
  readonly id?: string;
  readonly index_sync_time!: string;
  readonly name!: string;
  readonly private_endpoints!: any[];
  constructor(config: TerraformConfig, resourceName: string, args: GoogleVertexAiIndexEndpointDeployedIndexArgs) {
    super(config, "resource", args, resourceName, "google_vertex_ai_index_endpoint_deployed_index");
  }
}