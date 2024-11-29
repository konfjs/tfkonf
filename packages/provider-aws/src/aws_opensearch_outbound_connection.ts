import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsOpensearchOutboundConnectionArgsConnectionPropertiesCrossClusterSearch {
  skip_unavailable?: string;
}
export interface AwsOpensearchOutboundConnectionArgsConnectionProperties {
  cross_cluster_search: AwsOpensearchOutboundConnectionArgsConnectionPropertiesCrossClusterSearch;
}
export interface AwsOpensearchOutboundConnectionArgsLocalDomainInfo {
  domain_name: string;
  owner_id: string;
  region: string;
}
export interface AwsOpensearchOutboundConnectionArgsRemoteDomainInfo {
  domain_name: string;
  owner_id: string;
  region: string;
}
export interface AwsOpensearchOutboundConnectionArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface AwsOpensearchOutboundConnectionArgs {
  accept_connection?: boolean;
  connection_alias: string;
  connection_properties: AwsOpensearchOutboundConnectionArgsConnectionProperties;
  local_domain_info: AwsOpensearchOutboundConnectionArgsLocalDomainInfo;
  remote_domain_info: AwsOpensearchOutboundConnectionArgsRemoteDomainInfo;
  timeouts?: AwsOpensearchOutboundConnectionArgsTimeouts;
}
export class aws_opensearch_outbound_connection extends TerraformResource {
  readonly connection_mode?: string;
  readonly connection_status!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsOpensearchOutboundConnectionArgs) {
    super(config, "resource", args, resourceName, "aws_opensearch_outbound_connection");
  }
}