import { TerraformConfig, TerraformResource } from "tfs";
export interface DnsRecords {
  ttl: number;
  type: string;
}
export interface DnsConfig {
  namespace_id: string;
  routing_policy?: string;
  dns_records: DnsRecords;
}
export interface HealthCheckConfig {
  failure_threshold?: number;
  resource_path?: string;
  type?: string;
}
export interface HealthCheckCustomConfig {
  failure_threshold?: number;
}
export interface AwsServiceDiscoveryServiceArgs {
  description?: string;
  force_destroy?: boolean;
  name: string;
  tags?: {
    [key: string]: string;
  };
  dns_config: DnsConfig;
  health_check_config: HealthCheckConfig;
  health_check_custom_config: HealthCheckCustomConfig;
}
export class aws_service_discovery_service extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly namespace_id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly type?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsServiceDiscoveryServiceArgs) {
    super(config, "resource", args, resourceName, "aws_service_discovery_service");
  }
}