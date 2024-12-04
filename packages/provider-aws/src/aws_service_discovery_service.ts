import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsServiceDiscoveryServiceArgsDnsConfigDnsRecords {
  ttl: number;
  type: string;
}

export interface AwsServiceDiscoveryServiceArgsDnsConfig {
  namespace_id: string;
  routing_policy?: string;
  dns_records: AwsServiceDiscoveryServiceArgsDnsConfigDnsRecords;
}

export interface AwsServiceDiscoveryServiceArgsHealthCheckConfig {
  failure_threshold?: number;
  resource_path?: string;
  type?: string;
}

export interface AwsServiceDiscoveryServiceArgsHealthCheckCustomConfig {
  failure_threshold?: number;
}

export interface AwsServiceDiscoveryServiceArgs {
  description?: string;
  force_destroy?: boolean;
  name: string;
  tags?: { [key: string]: string };
  dns_config: AwsServiceDiscoveryServiceArgsDnsConfig;
  health_check_config: AwsServiceDiscoveryServiceArgsHealthCheckConfig;
  health_check_custom_config: AwsServiceDiscoveryServiceArgsHealthCheckCustomConfig;
}

export class aws_service_discovery_service extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly namespace_id?: string;
  readonly tags_all?: { [key: string]: string };
  readonly type?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsServiceDiscoveryServiceArgs) {
    super(config, "resource", args, resourceName, "aws_service_discovery_service");
  }
}
