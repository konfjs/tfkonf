import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsEcrRegistryScanningConfigurationArgsruleRepositoryFilter {
  filter: string;
  filter_type: string;
}
export interface AwsEcrRegistryScanningConfigurationArgsrule {
  scan_frequency: string;
  repository_filter: AwsEcrRegistryScanningConfigurationArgsruleRepositoryFilter;
}
export interface AwsEcrRegistryScanningConfigurationArgs {
  scan_type: string;
  rule: AwsEcrRegistryScanningConfigurationArgsrule;
}
export class aws_ecr_registry_scanning_configuration extends TerraformResource {
  readonly id?: string;
  readonly registry_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEcrRegistryScanningConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_ecr_registry_scanning_configuration");
  }
}