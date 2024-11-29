import { TerraformConfig, TerraformResource } from "tfs";
export interface PartitionIndex {
  index_name?: string;
  keys?: string[];
}
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface AwsGluePartitionIndexArgs {
  database_name: string;
  table_name: string;
  partition_index: PartitionIndex;
  timeouts: Timeouts;
}
export class aws_glue_partition_index extends TerraformResource {
  readonly catalog_id?: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsGluePartitionIndexArgs) {
    super(config, "resource", args, resourceName, "aws_glue_partition_index");
  }
}