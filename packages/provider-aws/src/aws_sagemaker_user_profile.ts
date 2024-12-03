import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsSagemakerUserProfileArgsUserSettingsCanvasAppSettingsDirectDeploySettings {
  status?: string;
}
export interface AwsSagemakerUserProfileArgsUserSettingsCanvasAppSettingsEmrServerlessSettings {
  execution_role_arn?: string;
  status?: string;
}
export interface AwsSagemakerUserProfileArgsUserSettingsCanvasAppSettingsGenerativeAiSettings {
  amazon_bedrock_role_arn?: string;
}
export interface AwsSagemakerUserProfileArgsUserSettingsCanvasAppSettingsIdentityProviderOauthSettings {
  data_source_name?: string;
  secret_arn: string;
  status?: string;
}
export interface AwsSagemakerUserProfileArgsUserSettingsCanvasAppSettingsKendraSettings {
  status?: string;
}
export interface AwsSagemakerUserProfileArgsUserSettingsCanvasAppSettingsModelRegisterSettings {
  cross_account_model_register_role_arn?: string;
  status?: string;
}
export interface AwsSagemakerUserProfileArgsUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings {
  amazon_forecast_role_arn?: string;
  status?: string;
}
export interface AwsSagemakerUserProfileArgsUserSettingsCanvasAppSettingsWorkspaceSettings {
  s3_artifact_path?: string;
  s3_kms_key_id?: string;
}
export interface AwsSagemakerUserProfileArgsUserSettingsCanvasAppSettings {
  direct_deploy_settings: AwsSagemakerUserProfileArgsUserSettingsCanvasAppSettingsDirectDeploySettings;
  emr_serverless_settings: AwsSagemakerUserProfileArgsUserSettingsCanvasAppSettingsEmrServerlessSettings;
  generative_ai_settings: AwsSagemakerUserProfileArgsUserSettingsCanvasAppSettingsGenerativeAiSettings;
  identity_provider_oauth_settings: AwsSagemakerUserProfileArgsUserSettingsCanvasAppSettingsIdentityProviderOauthSettings;
  kendra_settings: AwsSagemakerUserProfileArgsUserSettingsCanvasAppSettingsKendraSettings;
  model_register_settings: AwsSagemakerUserProfileArgsUserSettingsCanvasAppSettingsModelRegisterSettings;
  time_series_forecasting_settings: AwsSagemakerUserProfileArgsUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings;
  workspace_settings: AwsSagemakerUserProfileArgsUserSettingsCanvasAppSettingsWorkspaceSettings;
}
export interface AwsSagemakerUserProfileArgsUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings {
  idle_timeout_in_minutes?: number;
  lifecycle_management?: string;
  max_idle_timeout_in_minutes?: number;
  min_idle_timeout_in_minutes?: number;
}
export interface AwsSagemakerUserProfileArgsUserSettingsCodeEditorAppSettingsAppLifecycleManagement {
  idle_settings: AwsSagemakerUserProfileArgsUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings;
}
export interface AwsSagemakerUserProfileArgsUserSettingsCodeEditorAppSettingsCustomImage {
  app_image_config_name: string;
  image_name: string;
  image_version_number?: number;
}
export interface AwsSagemakerUserProfileArgsUserSettingsCodeEditorAppSettingsDefaultResourceSpec {
  instance_type?: string;
  lifecycle_config_arn?: string;
  sagemaker_image_arn?: string;
  sagemaker_image_version_alias?: string;
  sagemaker_image_version_arn?: string;
}
export interface AwsSagemakerUserProfileArgsUserSettingsCodeEditorAppSettings {
  built_in_lifecycle_config_arn?: string;
  lifecycle_config_arns?: string[];
  app_lifecycle_management: AwsSagemakerUserProfileArgsUserSettingsCodeEditorAppSettingsAppLifecycleManagement;
  custom_image: AwsSagemakerUserProfileArgsUserSettingsCodeEditorAppSettingsCustomImage;
  default_resource_spec: AwsSagemakerUserProfileArgsUserSettingsCodeEditorAppSettingsDefaultResourceSpec;
}
export interface AwsSagemakerUserProfileArgsUserSettingsCustomFileSystemConfigEfsFileSystemConfig {
  file_system_id: string;
  file_system_path?: string;
}
export interface AwsSagemakerUserProfileArgsUserSettingsCustomFileSystemConfig {
  efs_file_system_config: AwsSagemakerUserProfileArgsUserSettingsCustomFileSystemConfigEfsFileSystemConfig;
}
export interface AwsSagemakerUserProfileArgsUserSettingsCustomPosixUserConfig {
  gid: number;
  uid: number;
}
export interface AwsSagemakerUserProfileArgsUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings {
  idle_timeout_in_minutes?: number;
  lifecycle_management?: string;
  max_idle_timeout_in_minutes?: number;
  min_idle_timeout_in_minutes?: number;
}
export interface AwsSagemakerUserProfileArgsUserSettingsJupyterLabAppSettingsAppLifecycleManagement {
  idle_settings: AwsSagemakerUserProfileArgsUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings;
}
export interface AwsSagemakerUserProfileArgsUserSettingsJupyterLabAppSettingsCodeRepository {
  repository_url: string;
}
export interface AwsSagemakerUserProfileArgsUserSettingsJupyterLabAppSettingsCustomImage {
  app_image_config_name: string;
  image_name: string;
  image_version_number?: number;
}
export interface AwsSagemakerUserProfileArgsUserSettingsJupyterLabAppSettingsDefaultResourceSpec {
  instance_type?: string;
  lifecycle_config_arn?: string;
  sagemaker_image_arn?: string;
  sagemaker_image_version_alias?: string;
  sagemaker_image_version_arn?: string;
}
export interface AwsSagemakerUserProfileArgsUserSettingsJupyterLabAppSettingsEmrSettings {
  assumable_role_arns?: string[];
  execution_role_arns?: string[];
}
export interface AwsSagemakerUserProfileArgsUserSettingsJupyterLabAppSettings {
  built_in_lifecycle_config_arn?: string;
  lifecycle_config_arns?: string[];
  app_lifecycle_management: AwsSagemakerUserProfileArgsUserSettingsJupyterLabAppSettingsAppLifecycleManagement;
  code_repository: AwsSagemakerUserProfileArgsUserSettingsJupyterLabAppSettingsCodeRepository;
  custom_image: AwsSagemakerUserProfileArgsUserSettingsJupyterLabAppSettingsCustomImage;
  default_resource_spec: AwsSagemakerUserProfileArgsUserSettingsJupyterLabAppSettingsDefaultResourceSpec;
  emr_settings: AwsSagemakerUserProfileArgsUserSettingsJupyterLabAppSettingsEmrSettings;
}
export interface AwsSagemakerUserProfileArgsUserSettingsJupyterServerAppSettingsCodeRepository {
  repository_url: string;
}
export interface AwsSagemakerUserProfileArgsUserSettingsJupyterServerAppSettingsDefaultResourceSpec {
  instance_type?: string;
  lifecycle_config_arn?: string;
  sagemaker_image_arn?: string;
  sagemaker_image_version_alias?: string;
  sagemaker_image_version_arn?: string;
}
export interface AwsSagemakerUserProfileArgsUserSettingsJupyterServerAppSettings {
  lifecycle_config_arns?: string[];
  code_repository: AwsSagemakerUserProfileArgsUserSettingsJupyterServerAppSettingsCodeRepository;
  default_resource_spec: AwsSagemakerUserProfileArgsUserSettingsJupyterServerAppSettingsDefaultResourceSpec;
}
export interface AwsSagemakerUserProfileArgsUserSettingsKernelGatewayAppSettingsCustomImage {
  app_image_config_name: string;
  image_name: string;
  image_version_number?: number;
}
export interface AwsSagemakerUserProfileArgsUserSettingsKernelGatewayAppSettingsDefaultResourceSpec {
  instance_type?: string;
  lifecycle_config_arn?: string;
  sagemaker_image_arn?: string;
  sagemaker_image_version_alias?: string;
  sagemaker_image_version_arn?: string;
}
export interface AwsSagemakerUserProfileArgsUserSettingsKernelGatewayAppSettings {
  lifecycle_config_arns?: string[];
  custom_image: AwsSagemakerUserProfileArgsUserSettingsKernelGatewayAppSettingsCustomImage;
  default_resource_spec: AwsSagemakerUserProfileArgsUserSettingsKernelGatewayAppSettingsDefaultResourceSpec;
}
export interface AwsSagemakerUserProfileArgsUserSettingsRSessionAppSettingsCustomImage {
  app_image_config_name: string;
  image_name: string;
  image_version_number?: number;
}
export interface AwsSagemakerUserProfileArgsUserSettingsRSessionAppSettingsDefaultResourceSpec {
  instance_type?: string;
  lifecycle_config_arn?: string;
  sagemaker_image_arn?: string;
  sagemaker_image_version_alias?: string;
  sagemaker_image_version_arn?: string;
}
export interface AwsSagemakerUserProfileArgsUserSettingsRSessionAppSettings {
  custom_image: AwsSagemakerUserProfileArgsUserSettingsRSessionAppSettingsCustomImage;
  default_resource_spec: AwsSagemakerUserProfileArgsUserSettingsRSessionAppSettingsDefaultResourceSpec;
}
export interface AwsSagemakerUserProfileArgsUserSettingsRStudioServerProAppSettings {
  access_status?: string;
  user_group?: string;
}
export interface AwsSagemakerUserProfileArgsUserSettingsSharingSettings {
  notebook_output_option?: string;
  s3_kms_key_id?: string;
  s3_output_path?: string;
}
export interface AwsSagemakerUserProfileArgsUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings {
  default_ebs_volume_size_in_gb: number;
  maximum_ebs_volume_size_in_gb: number;
}
export interface AwsSagemakerUserProfileArgsUserSettingsSpaceStorageSettings {
  default_ebs_storage_settings: AwsSagemakerUserProfileArgsUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings;
}
export interface AwsSagemakerUserProfileArgsUserSettingsStudioWebPortalSettings {
  hidden_app_types?: string[];
  hidden_instance_types?: string[];
  hidden_ml_tools?: string[];
}
export interface AwsSagemakerUserProfileArgsUserSettingsTensorBoardAppSettingsDefaultResourceSpec {
  instance_type?: string;
  lifecycle_config_arn?: string;
  sagemaker_image_arn?: string;
  sagemaker_image_version_alias?: string;
  sagemaker_image_version_arn?: string;
}
export interface AwsSagemakerUserProfileArgsUserSettingsTensorBoardAppSettings {
  default_resource_spec: AwsSagemakerUserProfileArgsUserSettingsTensorBoardAppSettingsDefaultResourceSpec;
}
export interface AwsSagemakerUserProfileArgsUserSettings {
  default_landing_uri?: string;
  execution_role: string;
  security_groups?: string[];
  canvas_app_settings: AwsSagemakerUserProfileArgsUserSettingsCanvasAppSettings;
  code_editor_app_settings: AwsSagemakerUserProfileArgsUserSettingsCodeEditorAppSettings;
  custom_file_system_config: AwsSagemakerUserProfileArgsUserSettingsCustomFileSystemConfig;
  custom_posix_user_config: AwsSagemakerUserProfileArgsUserSettingsCustomPosixUserConfig;
  jupyter_lab_app_settings: AwsSagemakerUserProfileArgsUserSettingsJupyterLabAppSettings;
  jupyter_server_app_settings: AwsSagemakerUserProfileArgsUserSettingsJupyterServerAppSettings;
  kernel_gateway_app_settings: AwsSagemakerUserProfileArgsUserSettingsKernelGatewayAppSettings;
  r_session_app_settings: AwsSagemakerUserProfileArgsUserSettingsRSessionAppSettings;
  r_studio_server_pro_app_settings: AwsSagemakerUserProfileArgsUserSettingsRStudioServerProAppSettings;
  sharing_settings: AwsSagemakerUserProfileArgsUserSettingsSharingSettings;
  space_storage_settings: AwsSagemakerUserProfileArgsUserSettingsSpaceStorageSettings;
  studio_web_portal_settings: AwsSagemakerUserProfileArgsUserSettingsStudioWebPortalSettings;
  tensor_board_app_settings: AwsSagemakerUserProfileArgsUserSettingsTensorBoardAppSettings;
}
export interface AwsSagemakerUserProfileArgs {
  domain_id: string;
  single_sign_on_user_identifier?: string;
  single_sign_on_user_value?: string;
  tags?: {
    [key: string]: string;
  };
  user_profile_name: string;
  user_settings: AwsSagemakerUserProfileArgsUserSettings;
}
export class aws_sagemaker_user_profile extends TerraformResource {
  readonly arn!: string;
  readonly home_efs_file_system_uid!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsSagemakerUserProfileArgs) {
    super(config, "resource", args, resourceName, "aws_sagemaker_user_profile");
  }
}