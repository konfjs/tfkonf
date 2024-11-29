import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsImagebuilderDistributionConfigurationArgsdistributionAmiDistributionConfigurationLaunchPermission {
  organization_arns?: string[];
  organizational_unit_arns?: string[];
  user_groups?: string[];
  user_ids?: string[];
}
export interface AwsImagebuilderDistributionConfigurationArgsdistributionAmiDistributionConfiguration {
  ami_tags?: {
    [key: string]: string;
  };
  description?: string;
  kms_key_id?: string;
  name?: string;
  target_account_ids?: string[];
  launch_permission: AwsImagebuilderDistributionConfigurationArgsdistributionAmiDistributionConfigurationLaunchPermission;
}
export interface AwsImagebuilderDistributionConfigurationArgsdistributionContainerDistributionConfigurationTargetRepository {
  repository_name: string;
  service: string;
}
export interface AwsImagebuilderDistributionConfigurationArgsdistributionContainerDistributionConfiguration {
  container_tags?: string[];
  description?: string;
  target_repository: AwsImagebuilderDistributionConfigurationArgsdistributionContainerDistributionConfigurationTargetRepository;
}
export interface AwsImagebuilderDistributionConfigurationArgsdistributionFastLaunchConfigurationLaunchTemplate {
  launch_template_id?: string;
  launch_template_name?: string;
  launch_template_version?: string;
}
export interface AwsImagebuilderDistributionConfigurationArgsdistributionFastLaunchConfigurationSnapshotConfiguration {
  target_resource_count?: number;
}
export interface AwsImagebuilderDistributionConfigurationArgsdistributionFastLaunchConfiguration {
  account_id: string;
  enabled: boolean;
  max_parallel_launches?: number;
  launch_template: AwsImagebuilderDistributionConfigurationArgsdistributionFastLaunchConfigurationLaunchTemplate;
  snapshot_configuration: AwsImagebuilderDistributionConfigurationArgsdistributionFastLaunchConfigurationSnapshotConfiguration;
}
export interface AwsImagebuilderDistributionConfigurationArgsdistributionLaunchTemplateConfiguration {
  account_id?: string;
  default?: boolean;
  launch_template_id: string;
}
export interface AwsImagebuilderDistributionConfigurationArgsdistributionS3ExportConfiguration {
  disk_image_format: string;
  role_name: string;
  s3_bucket: string;
  s3_prefix?: string;
}
export interface AwsImagebuilderDistributionConfigurationArgsdistribution {
  license_configuration_arns?: string[];
  region: string;
  ami_distribution_configuration: AwsImagebuilderDistributionConfigurationArgsdistributionAmiDistributionConfiguration;
  container_distribution_configuration: AwsImagebuilderDistributionConfigurationArgsdistributionContainerDistributionConfiguration;
  fast_launch_configuration: AwsImagebuilderDistributionConfigurationArgsdistributionFastLaunchConfiguration;
  launch_template_configuration: AwsImagebuilderDistributionConfigurationArgsdistributionLaunchTemplateConfiguration;
  s3_export_configuration: AwsImagebuilderDistributionConfigurationArgsdistributionS3ExportConfiguration;
}
export interface AwsImagebuilderDistributionConfigurationArgs {
  description?: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  distribution: AwsImagebuilderDistributionConfigurationArgsdistribution;
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