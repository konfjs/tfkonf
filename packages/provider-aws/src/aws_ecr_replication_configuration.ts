import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsEcrReplicationConfigurationArgsReplicationConfigurationruledestination {
  region: string;
  registry_id: string;
}
export interface AwsEcrReplicationConfigurationArgsReplicationConfigurationruleRepositoryFilter {
  filter: string;
  filter_type: string;
}
export interface AwsEcrReplicationConfigurationArgsReplicationConfigurationrule {
  destination: AwsEcrReplicationConfigurationArgsReplicationConfigurationruledestination;
  repository_filter: AwsEcrReplicationConfigurationArgsReplicationConfigurationruleRepositoryFilter;
}
export interface AwsEcrReplicationConfigurationArgsReplicationConfiguration {
  rule: AwsEcrReplicationConfigurationArgsReplicationConfigurationrule;
}
export interface AwsEcrReplicationConfigurationArgs {
  replication_configuration: AwsEcrReplicationConfigurationArgsReplicationConfiguration;
}
export class aws_ecr_replication_configuration extends TerraformResource {
  readonly id?: string;
  readonly registry_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEcrReplicationConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_ecr_replication_configuration");
  }
}