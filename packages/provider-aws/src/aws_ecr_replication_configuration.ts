import { TerraformConfig, TerraformResource } from "tfs";
export interface Destination {
  region: string;
  registry_id: string;
}
export interface RepositoryFilter {
  filter: string;
  filter_type: string;
}
export interface Rule {
  destination: Destination;
  repository_filter: RepositoryFilter;
}
export interface ReplicationConfiguration {
  rule: Rule;
}
export interface AwsEcrReplicationConfigurationArgs {
  replication_configuration: ReplicationConfiguration;
}
export class aws_ecr_replication_configuration extends TerraformResource {
  readonly id?: string;
  readonly registry_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEcrReplicationConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_ecr_replication_configuration");
  }
}