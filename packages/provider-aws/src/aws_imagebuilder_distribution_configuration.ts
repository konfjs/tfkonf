import { TerraformConfig, TerraformResource } from "tfs";
export interface LaunchPermission {
  organization_arns?: string[];
  organizational_unit_arns?: string[];
  user_groups?: string[];
  user_ids?: string[];
}
export interface AmiDistributionConfiguration {
  ami_tags?: {
    [key: string]: string;
  };
  description?: string;
  kms_key_id?: string;
  name?: string;
  target_account_ids?: string[];
  launch_permission: LaunchPermission;
}
export interface TargetRepository {
  repository_name: string;
  service: string;
}
export interface ContainerDistributionConfiguration {
  container_tags?: string[];
  description?: string;
  target_repository: TargetRepository;
}
export interface LaunchTemplate {
  launch_template_id?: string;
  launch_template_name?: string;
  launch_template_version?: string;
}
export interface SnapshotConfiguration {
  target_resource_count?: number;
}
export interface FastLaunchConfiguration {
  account_id: string;
  enabled: boolean;
  max_parallel_launches?: number;
  launch_template: LaunchTemplate;
  snapshot_configuration: SnapshotConfiguration;
}
export interface LaunchTemplateConfiguration {
  account_id?: string;
  default?: boolean;
  launch_template_id: string;
}
export interface S3ExportConfiguration {
  disk_image_format: string;
  role_name: string;
  s3_bucket: string;
  s3_prefix?: string;
}
export interface Distribution {
  license_configuration_arns?: string[];
  region: string;
  ami_distribution_configuration: AmiDistributionConfiguration;
  container_distribution_configuration: ContainerDistributionConfiguration;
  fast_launch_configuration: FastLaunchConfiguration;
  launch_template_configuration: LaunchTemplateConfiguration;
  s3_export_configuration: S3ExportConfiguration;
}
export interface AwsImagebuilderDistributionConfigurationArgs {
  description?: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  distribution: Distribution;
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