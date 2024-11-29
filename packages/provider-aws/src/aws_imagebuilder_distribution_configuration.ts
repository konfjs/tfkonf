import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsImagebuilderDistributionConfigurationArgsDistributionAmiDistributionConfigurationLaunchPermission {
  organization_arns?: string[];
  organizational_unit_arns?: string[];
  user_groups?: string[];
  user_ids?: string[];
}
export interface AwsImagebuilderDistributionConfigurationArgsDistributionAmiDistributionConfiguration {
  ami_tags?: {
    [key: string]: string;
  };
  description?: string;
  kms_key_id?: string;
  name?: string;
  target_account_ids?: string[];
  launch_permission: AwsImagebuilderDistributionConfigurationArgsDistributionAmiDistributionConfigurationLaunchPermission;
}
export interface AwsImagebuilderDistributionConfigurationArgsDistributionContainerDistributionConfigurationTargetRepository {
  repository_name: string;
  service: string;
}
export interface AwsImagebuilderDistributionConfigurationArgsDistributionContainerDistributionConfiguration {
  container_tags?: string[];
  description?: string;
  target_repository: AwsImagebuilderDistributionConfigurationArgsDistributionContainerDistributionConfigurationTargetRepository;
}
export interface AwsImagebuilderDistributionConfigurationArgsDistributionFastLaunchConfigurationLaunchTemplate {
  launch_template_id?: string;
  launch_template_name?: string;
  launch_template_version?: string;
}
export interface AwsImagebuilderDistributionConfigurationArgsDistributionFastLaunchConfigurationSnapshotConfiguration {
  target_resource_count?: number;
}
export interface AwsImagebuilderDistributionConfigurationArgsDistributionFastLaunchConfiguration {
  account_id: string;
  enabled: boolean;
  max_parallel_launches?: number;
  launch_template: AwsImagebuilderDistributionConfigurationArgsDistributionFastLaunchConfigurationLaunchTemplate;
  snapshot_configuration: AwsImagebuilderDistributionConfigurationArgsDistributionFastLaunchConfigurationSnapshotConfiguration;
}
export interface AwsImagebuilderDistributionConfigurationArgsDistributionLaunchTemplateConfiguration {
  account_id?: string;
  default?: boolean;
  launch_template_id: string;
}
export interface AwsImagebuilderDistributionConfigurationArgsDistributionS3ExportConfiguration {
  disk_image_format: string;
  role_name: string;
  s3_bucket: string;
  s3_prefix?: string;
}
export interface AwsImagebuilderDistributionConfigurationArgsDistribution {
  license_configuration_arns?: string[];
  region: string;
  ami_distribution_configuration: AwsImagebuilderDistributionConfigurationArgsDistributionAmiDistributionConfiguration;
  container_distribution_configuration: AwsImagebuilderDistributionConfigurationArgsDistributionContainerDistributionConfiguration;
  fast_launch_configuration: AwsImagebuilderDistributionConfigurationArgsDistributionFastLaunchConfiguration;
  launch_template_configuration: AwsImagebuilderDistributionConfigurationArgsDistributionLaunchTemplateConfiguration;
  s3_export_configuration: AwsImagebuilderDistributionConfigurationArgsDistributionS3ExportConfiguration;
}
export interface AwsImagebuilderDistributionConfigurationArgs {
  description?: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  distribution: AwsImagebuilderDistributionConfigurationArgsDistribution;
}
export class aws_imagebuilder_distribution_configuration extends TerraformResource {
  readonly arn!: string;
  readonly date_created!: string;
  readonly date_updated!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsImagebuilderDistributionConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_imagebuilder_distribution_configuration");
  }
}