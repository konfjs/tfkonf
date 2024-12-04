import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEcrRegistryScanningConfigurationArgsRuleRepositoryFilter {
  filter: string;
  filter_type: string;
}

export interface AwsEcrRegistryScanningConfigurationArgsRule {
  scan_frequency: string;
  repository_filter: AwsEcrRegistryScanningConfigurationArgsRuleRepositoryFilter;
}

export interface AwsEcrRegistryScanningConfigurationArgs {
  scan_type: string;
  rule: AwsEcrRegistryScanningConfigurationArgsRule;
}

export class aws_ecr_registry_scanning_configuration extends TerraformResource {
  readonly id?: string;
  readonly registry_id!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsEcrRegistryScanningConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_ecr_registry_scanning_configuration");
  }
}
