import { TerraformConfig, TerraformResource } from "tfs";
export interface CapacitySpecification {
  read_capacity_units?: number;
  write_capacity_units?: number;
}
export interface ClientSideTimestamps {
  status: string;
}
export interface Comment {}
export interface EncryptionSpecification {
  kms_key_identifier?: string;
}
export interface PointInTimeRecovery {}
export interface ClusteringKey {
  name: string;
  order_by: string;
}
export interface Column {
  name: string;
  type: string;
}
export interface PartitionKey {
  name: string;
}
export interface StaticColumn {
  name: string;
}
export interface SchemaDefinition {
  clustering_key: ClusteringKey;
  column: Column;
  partition_key: PartitionKey;
  static_column: StaticColumn;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface Ttl {
  status: string;
}
export interface AwsKeyspacesTableArgs {
  default_time_to_live?: number;
  keyspace_name: string;
  table_name: string;
  tags?: {
    [key: string]: string;
  };
  capacity_specification: CapacitySpecification;
  client_side_timestamps: ClientSideTimestamps;
  comment: Comment;
  encryption_specification: EncryptionSpecification;
  point_in_time_recovery: PointInTimeRecovery;
  schema_definition: SchemaDefinition;
  timeouts: Timeouts;
  ttl: Ttl;
}
export class aws_keyspaces_table extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsKeyspacesTableArgs) {
    super(config, "resource", args, resourceName, "aws_keyspaces_table");
  }
}