import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsKeyspacesKeyspaceArgsReplicationSpecification {
  region_list?: string[];
}
export interface AwsKeyspacesKeyspaceArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface AwsKeyspacesKeyspaceArgs {
  name: string;
  tags?: {
    [key: string]: string;
  };
  replication_specification: AwsKeyspacesKeyspaceArgsReplicationSpecification;
  timeouts?: AwsKeyspacesKeyspaceArgsTimeouts;
}
export class aws_keyspaces_keyspace extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsKeyspacesKeyspaceArgs) {
    super(config, "resource", args, resourceName, "aws_keyspaces_keyspace");
  }
}