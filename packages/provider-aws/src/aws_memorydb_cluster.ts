import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsMemorydbClusterArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsMemorydbClusterArgs {
  acl_name: string;
  auto_minor_version_upgrade?: boolean;
  data_tiering?: boolean;
  description?: string;
  final_snapshot_name?: string;
  kms_key_arn?: string;
  node_type: string;
  num_replicas_per_shard?: number;
  num_shards?: number;
  security_group_ids?: string[];
  snapshot_arns?: string[];
  snapshot_name?: string;
  sns_topic_arn?: string;
  tags?: {
    [key: string]: string;
  };
  tls_enabled?: boolean;
  timeouts: AwsMemorydbClusterArgstimeouts;
}
export class aws_memorydb_cluster extends TerraformResource {
  readonly arn!: string;
  readonly cluster_endpoint!: any[];
  readonly engine?: string;
  readonly engine_patch_version!: string;
  readonly engine_version?: string;
  readonly id?: string;
  readonly maintenance_window?: string;
  readonly name?: string;
  readonly name_prefix?: string;
  readonly parameter_group_name?: string;
  readonly port?: number;
  readonly shards!: any[];
  readonly snapshot_retention_limit?: number;
  readonly snapshot_window?: string;
  readonly subnet_group_name?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsMemorydbClusterArgs) {
    super(config, "resource", args, resourceName, "aws_memorydb_cluster");
  }
}