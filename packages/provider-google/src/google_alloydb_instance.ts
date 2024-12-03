import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleAlloydbInstanceArgsClientConnectionConfigSslConfig {}
export interface GoogleAlloydbInstanceArgsClientConnectionConfig {
  require_connectors?: boolean;
  ssl_config: GoogleAlloydbInstanceArgsClientConnectionConfigSslConfig;
}
export interface GoogleAlloydbInstanceArgsMachineConfig {}
export interface GoogleAlloydbInstanceArgsNetworkConfigAuthorizedExternalNetworks {
  cidr_range?: string;
}
export interface GoogleAlloydbInstanceArgsNetworkConfig {
  enable_outbound_public_ip?: boolean;
  enable_public_ip?: boolean;
  authorized_external_networks: GoogleAlloydbInstanceArgsNetworkConfigAuthorizedExternalNetworks;
}
export interface GoogleAlloydbInstanceArgsPscInstanceConfig {
  allowed_consumer_projects?: string[];
}
export interface GoogleAlloydbInstanceArgsQueryInsightsConfig {
  query_plans_per_minute?: number;
  query_string_length?: number;
  record_application_tags?: boolean;
  record_client_address?: boolean;
}
export interface GoogleAlloydbInstanceArgsReadPoolConfig {
  node_count?: number;
}
export interface GoogleAlloydbInstanceArgsTimeouts {
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
  client_connection_config: GoogleAlloydbInstanceArgsClientConnectionConfig;
  machine_config: GoogleAlloydbInstanceArgsMachineConfig;
  network_config: GoogleAlloydbInstanceArgsNetworkConfig;
  psc_instance_config: GoogleAlloydbInstanceArgsPscInstanceConfig;
  query_insights_config: GoogleAlloydbInstanceArgsQueryInsightsConfig;
  read_pool_config: GoogleAlloydbInstanceArgsReadPoolConfig;
  timeouts?: GoogleAlloydbInstanceArgsTimeouts;
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