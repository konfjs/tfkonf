import { TerraformConfig, TerraformResource } from "tfs";
export interface OwnershipSettings {
  owner_user_profile_name: string;
}
export interface IdleSettings {
  idle_timeout_in_minutes?: number;
}
export interface AppLifecycleManagement {
  idle_settings: IdleSettings;
}
export interface DefaultResourceSpec {
  instance_type?: string;
  lifecycle_config_arn?: string;
  sagemaker_image_arn?: string;
  sagemaker_image_version_alias?: string;
  sagemaker_image_version_arn?: string;
}
export interface CodeEditorAppSettings {
  app_lifecycle_management: AppLifecycleManagement;
  default_resource_spec: DefaultResourceSpec;
}
export interface EfsFileSystem {
  file_system_id: string;
}
export interface CustomFileSystem {
  efs_file_system: EfsFileSystem;
}
export interface IdleSettings {
  idle_timeout_in_minutes?: number;
}
export interface AppLifecycleManagement {
  idle_settings: IdleSettings;
}
export interface CodeRepository {
  repository_url: string;
}
export interface DefaultResourceSpec {
  instance_type?: string;
  lifecycle_config_arn?: string;
  sagemaker_image_arn?: string;
  sagemaker_image_version_alias?: string;
  sagemaker_image_version_arn?: string;
}
export interface JupyterLabAppSettings {
  app_lifecycle_management: AppLifecycleManagement;
  code_repository: CodeRepository;
  default_resource_spec: DefaultResourceSpec;
}
export interface CodeRepository {
  repository_url: string;
}
export interface DefaultResourceSpec {
  instance_type?: string;
  lifecycle_config_arn?: string;
  sagemaker_image_arn?: string;
  sagemaker_image_version_alias?: string;
  sagemaker_image_version_arn?: string;
}
export interface JupyterServerAppSettings {
  lifecycle_config_arns?: string[];
  code_repository: CodeRepository;
  default_resource_spec: DefaultResourceSpec;
}
export interface CustomImage {
  app_image_config_name: string;
  image_name: string;
  image_version_number?: number;
}
export interface DefaultResourceSpec {
  instance_type?: string;
  lifecycle_config_arn?: string;
  sagemaker_image_arn?: string;
  sagemaker_image_version_alias?: string;
  sagemaker_image_version_arn?: string;
}
export interface KernelGatewayAppSettings {
  lifecycle_config_arns?: string[];
  custom_image: CustomImage;
  default_resource_spec: DefaultResourceSpec;
}
export interface EbsStorageSettings {
  ebs_volume_size_in_gb: number;
}
export interface SpaceStorageSettings {
  ebs_storage_settings: EbsStorageSettings;
}
export interface SpaceSettings {
  app_type?: string;
  code_editor_app_settings: CodeEditorAppSettings;
  custom_file_system: CustomFileSystem;
  jupyter_lab_app_settings: JupyterLabAppSettings;
  jupyter_server_app_settings: JupyterServerAppSettings;
  kernel_gateway_app_settings: KernelGatewayAppSettings;
  space_storage_settings: SpaceStorageSettings;
}
export interface SpaceSharingSettings {
  sharing_type: string;
}
export interface AwsSagemakerSpaceArgs {
  domain_id: string;
  space_display_name?: string;
  space_name: string;
  tags?: {
    [key: string]: string;
  };
  ownership_settings: OwnershipSettings;
  space_settings: SpaceSettings;
  space_sharing_settings: SpaceSharingSettings;
}
export class aws_sagemaker_space extends TerraformResource {
  readonly arn!: string;
  readonly home_efs_file_system_uid!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly url!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSagemakerSpaceArgs) {
    super(config, "resource", args, resourceName, "aws_sagemaker_space");
  }
}