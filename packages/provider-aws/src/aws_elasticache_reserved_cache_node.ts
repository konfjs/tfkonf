import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsElasticacheReservedCacheNodeArgs {
  reserved_cache_nodes_offering_id: string;
  tags?: {
    [key: string]: string;
  };
  timeouts: Timeouts;
}
export class aws_elasticache_reserved_cache_node extends TerraformResource {
  readonly arn!: string;
  readonly cache_node_count?: number;
  readonly cache_node_type!: string;
  readonly duration!: string;
  readonly fixed_price!: number;
  readonly id?: string;
  readonly offering_type!: string;
  readonly product_description!: string;
  readonly recurring_charges!: any[];
  readonly start_time!: string;
  readonly state!: string;
  readonly tags_all!: {
    [key: string]: string;
  };
  readonly usage_price!: number;
  constructor(config: TerraformConfig, resourceName: string, args: AwsElasticacheReservedCacheNodeArgs) {
    super(config, "resource", args, resourceName, "aws_elasticache_reserved_cache_node");
  }
}