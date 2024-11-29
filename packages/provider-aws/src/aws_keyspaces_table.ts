import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsKeyspacesTableArgsCapacitySpecification {
  read_capacity_units?: number;
  write_capacity_units?: number;
}
export interface AwsKeyspacesTableArgsClientSideTimestamps {
  status: string;
}
export interface AwsKeyspacesTableArgscomment {}
export interface AwsKeyspacesTableArgsEncryptionSpecification {
  kms_key_identifier?: string;
}
export interface AwsKeyspacesTableArgsPointInTimeRecovery {}
export interface AwsKeyspacesTableArgsSchemaDefinitionClusteringKey {
  name: string;
  order_by: string;
}
export interface AwsKeyspacesTableArgsSchemaDefinitioncolumn {
  name: string;
  type: string;
}
export interface AwsKeyspacesTableArgsSchemaDefinitionPartitionKey {
  name: string;
}
export interface AwsKeyspacesTableArgsSchemaDefinitionStaticColumn {
  name: string;
}
export interface AwsKeyspacesTableArgsSchemaDefinition {
  clustering_key: AwsKeyspacesTableArgsSchemaDefinitionClusteringKey;
  column: AwsKeyspacesTableArgsSchemaDefinitioncolumn;
  partition_key: AwsKeyspacesTableArgsSchemaDefinitionPartitionKey;
  static_column: AwsKeyspacesTableArgsSchemaDefinitionStaticColumn;
}
export interface AwsKeyspacesTableArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsKeyspacesTableArgsttl {
  status: string;
}
export interface AwsKeyspacesTableArgs {
  default_time_to_live?: number;
  keyspace_name: string;
  table_name: string;
  tags?: {
    [key: string]: string;
  };
  capacity_specification: AwsKeyspacesTableArgsCapacitySpecification;
  client_side_timestamps: AwsKeyspacesTableArgsClientSideTimestamps;
  comment: AwsKeyspacesTableArgscomment;
  encryption_specification: AwsKeyspacesTableArgsEncryptionSpecification;
  point_in_time_recovery: AwsKeyspacesTableArgsPointInTimeRecovery;
  schema_definition: AwsKeyspacesTableArgsSchemaDefinition;
  timeouts: AwsKeyspacesTableArgstimeouts;
  ttl: AwsKeyspacesTableArgsttl;
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