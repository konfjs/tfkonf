import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsEcrReplicationConfigurationArgsReplicationConfigurationRuleDestination {
  region: string;
  registry_id: string;
}
export interface AwsEcrReplicationConfigurationArgsReplicationConfigurationRuleRepositoryFilter {
  filter: string;
  filter_type: string;
}
export interface AwsEcrReplicationConfigurationArgsReplicationConfigurationRule {
  destination: AwsEcrReplicationConfigurationArgsReplicationConfigurationRuleDestination;
  repository_filter: AwsEcrReplicationConfigurationArgsReplicationConfigurationRuleRepositoryFilter;
}
export interface AwsEcrReplicationConfigurationArgsReplicationConfiguration {
  rule: AwsEcrReplicationConfigurationArgsReplicationConfigurationRule;
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