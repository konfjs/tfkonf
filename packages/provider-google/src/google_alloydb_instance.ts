import { TerraformConfig, TerraformResource } from "tfs";
export interface SslConfig {}
export interface ClientConnectionConfig {
  require_connectors?: boolean;
  ssl_config: SslConfig;
}
export interface MachineConfig {}
export interface AuthorizedExternalNetworks {
  cidr_range?: string;
}
export interface NetworkConfig {
  enable_outbound_public_ip?: boolean;
  enable_public_ip?: boolean;
  authorized_external_networks: AuthorizedExternalNetworks;
}
export interface PscInstanceConfig {
  allowed_consumer_projects?: string[];
}
export interface QueryInsightsConfig {
  query_plans_per_minute?: number;
  query_string_length?: number;
  record_application_tags?: boolean;
  record_client_address?: boolean;
}
export interface ReadPoolConfig {
  node_count?: number;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleAlloydbInstanceArgs {
  annotations?: {
    [key: string]: string;
  };
  cluster: string;
  display_name?: string;
  gce_zone?: string;
  instance_id: string;
  instance_type: string;
  labels?: {
    [key: string]: string;
  };
  client_connection_config: ClientConnectionConfig;
  machine_config: MachineConfig;
  network_config: NetworkConfig;
  psc_instance_config: PscInstanceConfig;
  query_insights_config: QueryInsightsConfig;
  read_pool_config: ReadPoolConfig;
  timeouts: Timeouts;
}
export class google_alloydb_instance extends TerraformResource {
  readonly availability_type?: string;
  readonly create_time!: string;
  readonly database_flags?: {
    [key: string]: string;
  };
  readonly effective_annotations!: {
    [key: string]: string;
  };
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly ip_address!: string;
  readonly name!: string;
  readonly outbound_public_ip_addresses!: string[];
  readonly public_ip_address!: string;
  readonly reconciling!: boolean;
  readonly state!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly uid!: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleAlloydbInstanceArgs) {
    super(config, "resource", args, resourceName, "google_alloydb_instance");
  }
}