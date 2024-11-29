import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsSagemakerSpaceArgsOwnershipSettings {
  owner_user_profile_name: string;
}
export interface AwsSagemakerSpaceArgsSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings {
  idle_timeout_in_minutes?: number;
}
export interface AwsSagemakerSpaceArgsSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement {
  idle_settings: AwsSagemakerSpaceArgsSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings;
}
export interface AwsSagemakerSpaceArgsSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec {
  instance_type?: string;
  lifecycle_config_arn?: string;
  sagemaker_image_arn?: string;
  sagemaker_image_version_alias?: string;
  sagemaker_image_version_arn?: string;
}
export interface AwsSagemakerSpaceArgsSpaceSettingsCodeEditorAppSettings {
  app_lifecycle_management: AwsSagemakerSpaceArgsSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement;
  default_resource_spec: AwsSagemakerSpaceArgsSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec;
}
export interface AwsSagemakerSpaceArgsSpaceSettingsCustomFileSystemEfsFileSystem {
  file_system_id: string;
}
export interface AwsSagemakerSpaceArgsSpaceSettingsCustomFileSystem {
  efs_file_system: AwsSagemakerSpaceArgsSpaceSettingsCustomFileSystemEfsFileSystem;
}
export interface AwsSagemakerSpaceArgsSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings {
  idle_timeout_in_minutes?: number;
}
export interface AwsSagemakerSpaceArgsSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement {
  idle_settings: AwsSagemakerSpaceArgsSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings;
}
export interface AwsSagemakerSpaceArgsSpaceSettingsJupyterLabAppSettingsCodeRepository {
  repository_url: string;
}
export interface AwsSagemakerSpaceArgsSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec {
  instance_type?: string;
  lifecycle_config_arn?: string;
  sagemaker_image_arn?: string;
  sagemaker_image_version_alias?: string;
  sagemaker_image_version_arn?: string;
}
export interface AwsSagemakerSpaceArgsSpaceSettingsJupyterLabAppSettings {
  app_lifecycle_management: AwsSagemakerSpaceArgsSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement;
  code_repository: AwsSagemakerSpaceArgsSpaceSettingsJupyterLabAppSettingsCodeRepository;
  default_resource_spec: AwsSagemakerSpaceArgsSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec;
}
export interface AwsSagemakerSpaceArgsSpaceSettingsJupyterServerAppSettingsCodeRepository {
  repository_url: string;
}
export interface AwsSagemakerSpaceArgsSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec {
  instance_type?: string;
  lifecycle_config_arn?: string;
  sagemaker_image_arn?: string;
  sagemaker_image_version_alias?: string;
  sagemaker_image_version_arn?: string;
}
export interface AwsSagemakerSpaceArgsSpaceSettingsJupyterServerAppSettings {
  lifecycle_config_arns?: string[];
  code_repository: AwsSagemakerSpaceArgsSpaceSettingsJupyterServerAppSettingsCodeRepository;
  default_resource_spec: AwsSagemakerSpaceArgsSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec;
}
export interface AwsSagemakerSpaceArgsSpaceSettingsKernelGatewayAppSettingsCustomImage {
  app_image_config_name: string;
  image_name: string;
  image_version_number?: number;
}
export interface AwsSagemakerSpaceArgsSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec {
  instance_type?: string;
  lifecycle_config_arn?: string;
  sagemaker_image_arn?: string;
  sagemaker_image_version_alias?: string;
  sagemaker_image_version_arn?: string;
}
export interface AwsSagemakerSpaceArgsSpaceSettingsKernelGatewayAppSettings {
  lifecycle_config_arns?: string[];
  custom_image: AwsSagemakerSpaceArgsSpaceSettingsKernelGatewayAppSettingsCustomImage;
  default_resource_spec: AwsSagemakerSpaceArgsSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec;
}
export interface AwsSagemakerSpaceArgsSpaceSettingsSpaceStorageSettingsEbsStorageSettings {
  ebs_volume_size_in_gb: number;
}
export interface AwsSagemakerSpaceArgsSpaceSettingsSpaceStorageSettings {
  ebs_storage_settings: AwsSagemakerSpaceArgsSpaceSettingsSpaceStorageSettingsEbsStorageSettings;
}
export interface AwsSagemakerSpaceArgsSpaceSettings {
  app_type?: string;
  code_editor_app_settings: AwsSagemakerSpaceArgsSpaceSettingsCodeEditorAppSettings;
  custom_file_system: AwsSagemakerSpaceArgsSpaceSettingsCustomFileSystem;
  jupyter_lab_app_settings: AwsSagemakerSpaceArgsSpaceSettingsJupyterLabAppSettings;
  jupyter_server_app_settings: AwsSagemakerSpaceArgsSpaceSettingsJupyterServerAppSettings;
  kernel_gateway_app_settings: AwsSagemakerSpaceArgsSpaceSettingsKernelGatewayAppSettings;
  space_storage_settings: AwsSagemakerSpaceArgsSpaceSettingsSpaceStorageSettings;
}
export interface AwsSagemakerSpaceArgsSpaceSharingSettings {
  sharing_type: string;
}
export interface AwsSagemakerSpaceArgs {
  domain_id: string;
  space_display_name?: string;
  space_name: string;
  tags?: {
    [key: string]: string;
  };
  ownership_settings: AwsSagemakerSpaceArgsOwnershipSettings;
  space_settings: AwsSagemakerSpaceArgsSpaceSettings;
  space_sharing_settings: AwsSagemakerSpaceArgsSpaceSharingSettings;
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