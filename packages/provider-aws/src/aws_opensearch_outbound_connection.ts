import { TerraformConfig, TerraformResource } from "tfs";
export interface CrossClusterSearch {
  skip_unavailable?: string;
}
export interface ConnectionProperties {
  cross_cluster_search: CrossClusterSearch;
}
export interface LocalDomainInfo {
  domain_name: string;
  owner_id: string;
  region: string;
}
export interface RemoteDomainInfo {
  domain_name: string;
  owner_id: string;
  region: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface AwsOpensearchOutboundConnectionArgs {
  accept_connection?: boolean;
  connection_alias: string;
  connection_properties: ConnectionProperties;
  local_domain_info: LocalDomainInfo;
  remote_domain_info: RemoteDomainInfo;
  timeouts: Timeouts;
}
export class aws_opensearch_outbound_connection extends TerraformResource {
  readonly connection_mode?: string;
  readonly connection_status!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsOpensearchOutboundConnectionArgs) {
    super(config, "resource", args, resourceName, "aws_opensearch_outbound_connection");
  }
}