import { TerraformConfig, TerraformResource } from "tfs";
export interface DataStorage {
  maximum?: number;
  minimum?: number;
  unit: string;
}
export interface EcpuPerSecond {
  maximum?: number;
  minimum?: number;
}
export interface CacheUsageLimits {
  data_storage: DataStorage;
  ecpu_per_second: EcpuPerSecond;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsElasticacheServerlessCacheArgs {
  engine: string;
  kms_key_id?: string;
  name: string;
  snapshot_arns_to_restore?: string[];
  tags?: {
    [key: string]: string;
  };
  user_group_id?: string;
  cache_usage_limits: CacheUsageLimits;
  timeouts: Timeouts;
}
export class aws_elasticache_serverless_cache extends TerraformResource {
  readonly arn!: string;
  readonly create_time!: string;
  readonly daily_snapshot_time?: string;
  readonly description?: string;
  readonly endpoint!: any[];
  readonly full_engine_version!: string;
  readonly id!: string;
  readonly major_engine_version?: string;
  readonly reader_endpoint!: any[];
  readonly security_group_ids?: string[];
  readonly snapshot_retention_limit?: number;
  readonly status!: string;
  readonly subnet_ids?: string[];
  readonly tags_all!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsElasticacheServerlessCacheArgs) {
    super(config, "resource", args, resourceName, "aws_elasticache_serverless_cache");
  }
}