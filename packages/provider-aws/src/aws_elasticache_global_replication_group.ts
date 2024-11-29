import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsElasticacheGlobalReplicationGroupArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsElasticacheGlobalReplicationGroupArgs {
  global_replication_group_description?: string;
  global_replication_group_id_suffix: string;
  parameter_group_name?: string;
  primary_replication_group_id: string;
  timeouts: AwsElasticacheGlobalReplicationGroupArgstimeouts;
}
export class aws_elasticache_global_replication_group extends TerraformResource {
  readonly arn!: string;
  readonly at_rest_encryption_enabled!: boolean;
  readonly auth_token_enabled!: boolean;
  readonly automatic_failover_enabled?: boolean;
  readonly cache_node_type?: string;
  readonly cluster_enabled!: boolean;
  readonly engine!: string;
  readonly engine_version?: string;
  readonly engine_version_actual!: string;
  readonly global_node_groups!: any[];
  readonly global_replication_group_id!: string;
  readonly id?: string;
  readonly num_node_groups?: number;
  readonly transit_encryption_enabled!: boolean;
  constructor(config: TerraformConfig, resourceName: string, args: AwsElasticacheGlobalReplicationGroupArgs) {
    super(config, "resource", args, resourceName, "aws_elasticache_global_replication_group");
  }
}