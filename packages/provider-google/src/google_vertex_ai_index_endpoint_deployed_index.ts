import { TerraformConfig, TerraformResource } from "tfs";
export interface AutomaticResources {}
export interface MachineSpec {
  machine_type?: string;
}
export interface DedicatedResources {
  min_replica_count: number;
  machine_spec: MachineSpec;
}
export interface AuthProvider {
  allowed_issuers?: string[];
  audiences?: string[];
}
export interface DeployedIndexAuthConfig {
  auth_provider: AuthProvider;
}
export interface Timeouts {
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
  automatic_resources: AutomaticResources;
  dedicated_resources: DedicatedResources;
  deployed_index_auth_config: DeployedIndexAuthConfig;
  timeouts: Timeouts;
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