import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsSagemakerDomainArgsDefaultSpaceSettingsCustomFileSystemConfigEfsFileSystemConfig {
  file_system_id: string;
  file_system_path: string;
}
export interface AwsSagemakerDomainArgsDefaultSpaceSettingsCustomFileSystemConfig {
  efs_file_system_config: AwsSagemakerDomainArgsDefaultSpaceSettingsCustomFileSystemConfigEfsFileSystemConfig;
}
export interface AwsSagemakerDomainArgsDefaultSpaceSettingsCustomPosixUserConfig {
  gid: number;
  uid: number;
}
export interface AwsSagemakerDomainArgsDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings {
  idle_timeout_in_minutes?: number;
  lifecycle_management?: string;
  max_idle_timeout_in_minutes?: number;
  min_idle_timeout_in_minutes?: number;
}
export interface AwsSagemakerDomainArgsDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement {
  idle_settings: AwsSagemakerDomainArgsDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings;
}
export interface AwsSagemakerDomainArgsDefaultSpaceSettingsJupyterLabAppSettingsCodeRepository {
  repository_url: string;
}
export interface AwsSagemakerDomainArgsDefaultSpaceSettingsJupyterLabAppSettingsCustomImage {
  app_image_config_name: string;
  image_name: string;
  image_version_number?: number;
}
export interface AwsSagemakerDomainArgsDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec {
  instance_type?: string;
  lifecycle_config_arn?: string;
  sagemaker_image_arn?: string;
  sagemaker_image_version_alias?: string;
  sagemaker_image_version_arn?: string;
}
export interface AwsSagemakerDomainArgsDefaultSpaceSettingsJupyterLabAppSettingsEmrSettings {
  assumable_role_arns?: string[];
  execution_role_arns?: string[];
}
export interface AwsSagemakerDomainArgsDefaultSpaceSettingsJupyterLabAppSettings {
  built_in_lifecycle_config_arn?: string;
  lifecycle_config_arns?: string[];
  app_lifecycle_management: AwsSagemakerDomainArgsDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement;
  code_repository: AwsSagemakerDomainArgsDefaultSpaceSettingsJupyterLabAppSettingsCodeRepository;
  custom_image: AwsSagemakerDomainArgsDefaultSpaceSettingsJupyterLabAppSettingsCustomImage;
  default_resource_spec: AwsSagemakerDomainArgsDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec;
  emr_settings: AwsSagemakerDomainArgsDefaultSpaceSettingsJupyterLabAppSettingsEmrSettings;
}
export interface AwsSagemakerDomainArgsDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository {
  repository_url: string;
}
export interface AwsSagemakerDomainArgsDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec {
  instance_type?: string;
  lifecycle_config_arn?: string;
  sagemaker_image_arn?: string;
  sagemaker_image_version_alias?: string;
  sagemaker_image_version_arn?: string;
}
export interface AwsSagemakerDomainArgsDefaultSpaceSettingsJupyterServerAppSettings {
  lifecycle_config_arns?: string[];
  code_repository: AwsSagemakerDomainArgsDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository;
  default_resource_spec: AwsSagemakerDomainArgsDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec;
}
export interface AwsSagemakerDomainArgsDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage {
  app_image_config_name: string;
  image_name: string;
  image_version_number?: number;
}
export interface AwsSagemakerDomainArgsDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec {
  instance_type?: string;
  lifecycle_config_arn?: string;
  sagemaker_image_arn?: string;
  sagemaker_image_version_alias?: string;
  sagemaker_image_version_arn?: string;
}
export interface AwsSagemakerDomainArgsDefaultSpaceSettingsKernelGatewayAppSettings {
  lifecycle_config_arns?: string[];
  custom_image: AwsSagemakerDomainArgsDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage;
  default_resource_spec: AwsSagemakerDomainArgsDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec;
}
export interface AwsSagemakerDomainArgsDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettings {
  default_ebs_volume_size_in_gb: number;
  maximum_ebs_volume_size_in_gb: number;
}
export interface AwsSagemakerDomainArgsDefaultSpaceSettingsSpaceStorageSettings {
  default_ebs_storage_settings: AwsSagemakerDomainArgsDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettings;
}
export interface AwsSagemakerDomainArgsDefaultSpaceSettings {
  execution_role: string;
  security_groups?: string[];
  custom_file_system_config: AwsSagemakerDomainArgsDefaultSpaceSettingsCustomFileSystemConfig;
  custom_posix_user_config: AwsSagemakerDomainArgsDefaultSpaceSettingsCustomPosixUserConfig;
  jupyter_lab_app_settings: AwsSagemakerDomainArgsDefaultSpaceSettingsJupyterLabAppSettings;
  jupyter_server_app_settings: AwsSagemakerDomainArgsDefaultSpaceSettingsJupyterServerAppSettings;
  kernel_gateway_app_settings: AwsSagemakerDomainArgsDefaultSpaceSettingsKernelGatewayAppSettings;
  space_storage_settings: AwsSagemakerDomainArgsDefaultSpaceSettingsSpaceStorageSettings;
}
export interface AwsSagemakerDomainArgsDefaultUserSettingsCanvasAppSettingsDirectDeploySettings {
  status?: string;
}
export interface AwsSagemakerDomainArgsDefaultUserSettingsCanvasAppSettingsEmrServerlessSettings {
  execution_role_arn?: string;
  status?: string;
}
export interface AwsSagemakerDomainArgsDefaultUserSettingsCanvasAppSettingsGenerativeAiSettings {
  amazon_bedrock_role_arn?: string;
}
export interface AwsSagemakerDomainArgsDefaultUserSettingsCanvasAppSettingsIdentityProviderOauthSettings {
  data_source_name?: string;
  secret_arn: string;
  status?: string;
}
export interface AwsSagemakerDomainArgsDefaultUserSettingsCanvasAppSettingsKendraSettings {
  status?: string;
}
export interface AwsSagemakerDomainArgsDefaultUserSettingsCanvasAppSettingsModelRegisterSettings {
  cross_account_model_register_role_arn?: string;
  status?: string;
}
export interface AwsSagemakerDomainArgsDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings {
  amazon_forecast_role_arn?: string;
  status?: string;
}
export interface AwsSagemakerDomainArgsDefaultUserSettingsCanvasAppSettingsWorkspaceSettings {
  s3_artifact_path?: string;
  s3_kms_key_id?: string;
}
export interface AwsSagemakerDomainArgsDefaultUserSettingsCanvasAppSettings {
  direct_deploy_settings: AwsSagemakerDomainArgsDefaultUserSettingsCanvasAppSettingsDirectDeploySettings;
  emr_serverless_settings: AwsSagemakerDomainArgsDefaultUserSettingsCanvasAppSettingsEmrServerlessSettings;
  generative_ai_settings: AwsSagemakerDomainArgsDefaultUserSettingsCanvasAppSettingsGenerativeAiSettings;
  identity_provider_oauth_settings: AwsSagemakerDomainArgsDefaultUserSettingsCanvasAppSettingsIdentityProviderOauthSettings;
  kendra_settings: AwsSagemakerDomainArgsDefaultUserSettingsCanvasAppSettingsKendraSettings;
  model_register_settings: AwsSagemakerDomainArgsDefaultUserSettingsCanvasAppSettingsModelRegisterSettings;
  time_series_forecasting_settings: AwsSagemakerDomainArgsDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings;
  workspace_settings: AwsSagemakerDomainArgsDefaultUserSettingsCanvasAppSettingsWorkspaceSettings;
}
export interface AwsSagemakerDomainArgsDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings {
  idle_timeout_in_minutes?: number;
  lifecycle_management?: string;
  max_idle_timeout_in_minutes?: number;
  min_idle_timeout_in_minutes?: number;
}
export interface AwsSagemakerDomainArgsDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagement {
  idle_settings: AwsSagemakerDomainArgsDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings;
}
export interface AwsSagemakerDomainArgsDefaultUserSettingsCodeEditorAppSettingsCustomImage {
  app_image_config_name: string;
  image_name: string;
  image_version_number?: number;
}
export interface AwsSagemakerDomainArgsDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpec {
  instance_type?: string;
  lifecycle_config_arn?: string;
  sagemaker_image_arn?: string;
  sagemaker_image_version_alias?: string;
  sagemaker_image_version_arn?: string;
}
export interface AwsSagemakerDomainArgsDefaultUserSettingsCodeEditorAppSettings {
  built_in_lifecycle_config_arn?: string;
  lifecycle_config_arns?: string[];
  app_lifecycle_management: AwsSagemakerDomainArgsDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagement;
  custom_image: AwsSagemakerDomainArgsDefaultUserSettingsCodeEditorAppSettingsCustomImage;
  default_resource_spec: AwsSagemakerDomainArgsDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpec;
}
export interface AwsSagemakerDomainArgsDefaultUserSettingsCustomFileSystemConfigEfsFileSystemConfig {
  file_system_id: string;
  file_system_path: string;
}
export interface AwsSagemakerDomainArgsDefaultUserSettingsCustomFileSystemConfig {
  efs_file_system_config: AwsSagemakerDomainArgsDefaultUserSettingsCustomFileSystemConfigEfsFileSystemConfig;
}
export interface AwsSagemakerDomainArgsDefaultUserSettingsCustomPosixUserConfig {
  gid: number;
  uid: number;
}
export interface AwsSagemakerDomainArgsDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings {
  idle_timeout_in_minutes?: number;
  lifecycle_management?: string;
  max_idle_timeout_in_minutes?: number;
  min_idle_timeout_in_minutes?: number;
}
export interface AwsSagemakerDomainArgsDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagement {
  idle_settings: AwsSagemakerDomainArgsDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings;
}
export interface AwsSagemakerDomainArgsDefaultUserSettingsJupyterLabAppSettingsCodeRepository {
  repository_url: string;
}
export interface AwsSagemakerDomainArgsDefaultUserSettingsJupyterLabAppSettingsCustomImage {
  app_image_config_name: string;
  image_name: string;
  image_version_number?: number;
}
export interface AwsSagemakerDomainArgsDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpec {
  instance_type?: string;
  lifecycle_config_arn?: string;
  sagemaker_image_arn?: string;
  sagemaker_image_version_alias?: string;
  sagemaker_image_version_arn?: string;
}
export interface AwsSagemakerDomainArgsDefaultUserSettingsJupyterLabAppSettingsEmrSettings {
  assumable_role_arns?: string[];
  execution_role_arns?: string[];
}
export interface AwsSagemakerDomainArgsDefaultUserSettingsJupyterLabAppSettings {
  built_in_lifecycle_config_arn?: string;
  lifecycle_config_arns?: string[];
  app_lifecycle_management: AwsSagemakerDomainArgsDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagement;
  code_repository: AwsSagemakerDomainArgsDefaultUserSettingsJupyterLabAppSettingsCodeRepository;
  custom_image: AwsSagemakerDomainArgsDefaultUserSettingsJupyterLabAppSettingsCustomImage;
  default_resource_spec: AwsSagemakerDomainArgsDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpec;
  emr_settings: AwsSagemakerDomainArgsDefaultUserSettingsJupyterLabAppSettingsEmrSettings;
}
export interface AwsSagemakerDomainArgsDefaultUserSettingsJupyterServerAppSettingsCodeRepository {
  repository_url: string;
}
export interface AwsSagemakerDomainArgsDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec {
  instance_type?: string;
  lifecycle_config_arn?: string;
  sagemaker_image_arn?: string;
  sagemaker_image_version_alias?: string;
  sagemaker_image_version_arn?: string;
}
export interface AwsSagemakerDomainArgsDefaultUserSettingsJupyterServerAppSettings {
  lifecycle_config_arns?: string[];
  code_repository: AwsSagemakerDomainArgsDefaultUserSettingsJupyterServerAppSettingsCodeRepository;
  default_resource_spec: AwsSagemakerDomainArgsDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec;
}
export interface AwsSagemakerDomainArgsDefaultUserSettingsKernelGatewayAppSettingsCustomImage {
  app_image_config_name: string;
  image_name: string;
  image_version_number?: number;
}
export interface AwsSagemakerDomainArgsDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec {
  instance_type?: string;
  lifecycle_config_arn?: string;
  sagemaker_image_arn?: string;
  sagemaker_image_version_alias?: string;
  sagemaker_image_version_arn?: string;
}
export interface AwsSagemakerDomainArgsDefaultUserSettingsKernelGatewayAppSettings {
  lifecycle_config_arns?: string[];
  custom_image: AwsSagemakerDomainArgsDefaultUserSettingsKernelGatewayAppSettingsCustomImage;
  default_resource_spec: AwsSagemakerDomainArgsDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec;
}
export interface AwsSagemakerDomainArgsDefaultUserSettingsRSessionAppSettingsCustomImage {
  app_image_config_name: string;
  image_name: string;
  image_version_number?: number;
}
export interface AwsSagemakerDomainArgsDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec {
  instance_type?: string;
  lifecycle_config_arn?: string;
  sagemaker_image_arn?: string;
  sagemaker_image_version_alias?: string;
  sagemaker_image_version_arn?: string;
}
export interface AwsSagemakerDomainArgsDefaultUserSettingsRSessionAppSettings {
  custom_image: AwsSagemakerDomainArgsDefaultUserSettingsRSessionAppSettingsCustomImage;
  default_resource_spec: AwsSagemakerDomainArgsDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec;
}
export interface AwsSagemakerDomainArgsDefaultUserSettingsRStudioServerProAppSettings {
  access_status?: string;
  user_group?: string;
}
export interface AwsSagemakerDomainArgsDefaultUserSettingsSharingSettings {
  notebook_output_option?: string;
  s3_kms_key_id?: string;
  s3_output_path?: string;
}
export interface AwsSagemakerDomainArgsDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings {
  default_ebs_volume_size_in_gb: number;
  maximum_ebs_volume_size_in_gb: number;
}
export interface AwsSagemakerDomainArgsDefaultUserSettingsSpaceStorageSettings {
  default_ebs_storage_settings: AwsSagemakerDomainArgsDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings;
}
export interface AwsSagemakerDomainArgsDefaultUserSettingsStudioWebPortalSettings {
  hidden_app_types?: string[];
  hidden_instance_types?: string[];
  hidden_ml_tools?: string[];
}
export interface AwsSagemakerDomainArgsDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec {
  instance_type?: string;
  lifecycle_config_arn?: string;
  sagemaker_image_arn?: string;
  sagemaker_image_version_alias?: string;
  sagemaker_image_version_arn?: string;
}
export interface AwsSagemakerDomainArgsDefaultUserSettingsTensorBoardAppSettings {
  default_resource_spec: AwsSagemakerDomainArgsDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec;
}
export interface AwsSagemakerDomainArgsDefaultUserSettings {
  execution_role: string;
  security_groups?: string[];
  canvas_app_settings: AwsSagemakerDomainArgsDefaultUserSettingsCanvasAppSettings;
  code_editor_app_settings: AwsSagemakerDomainArgsDefaultUserSettingsCodeEditorAppSettings;
  custom_file_system_config: AwsSagemakerDomainArgsDefaultUserSettingsCustomFileSystemConfig;
  custom_posix_user_config: AwsSagemakerDomainArgsDefaultUserSettingsCustomPosixUserConfig;
  jupyter_lab_app_settings: AwsSagemakerDomainArgsDefaultUserSettingsJupyterLabAppSettings;
  jupyter_server_app_settings: AwsSagemakerDomainArgsDefaultUserSettingsJupyterServerAppSettings;
  kernel_gateway_app_settings: AwsSagemakerDomainArgsDefaultUserSettingsKernelGatewayAppSettings;
  r_session_app_settings: AwsSagemakerDomainArgsDefaultUserSettingsRSessionAppSettings;
  r_studio_server_pro_app_settings: AwsSagemakerDomainArgsDefaultUserSettingsRStudioServerProAppSettings;
  sharing_settings: AwsSagemakerDomainArgsDefaultUserSettingsSharingSettings;
  space_storage_settings: AwsSagemakerDomainArgsDefaultUserSettingsSpaceStorageSettings;
  studio_web_portal_settings: AwsSagemakerDomainArgsDefaultUserSettingsStudioWebPortalSettings;
  tensor_board_app_settings: AwsSagemakerDomainArgsDefaultUserSettingsTensorBoardAppSettings;
}
export interface AwsSagemakerDomainArgsDomainSettingsDockerSettings {
  enable_docker_access?: string;
  vpc_only_trusted_accounts?: string[];
}
export interface AwsSagemakerDomainArgsDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpec {
  instance_type?: string;
  lifecycle_config_arn?: string;
  sagemaker_image_arn?: string;
  sagemaker_image_version_alias?: string;
  sagemaker_image_version_arn?: string;
}
export interface AwsSagemakerDomainArgsDomainSettingsRStudioServerProDomainSettings {
  domain_execution_role_arn: string;
  r_studio_connect_url?: string;
  r_studio_package_manager_url?: string;
  default_resource_spec: AwsSagemakerDomainArgsDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpec;
}
export interface AwsSagemakerDomainArgsDomainSettings {
  execution_role_identity_config?: string;
  security_group_ids?: string[];
  docker_settings: AwsSagemakerDomainArgsDomainSettingsDockerSettings;
  r_studio_server_pro_domain_settings: AwsSagemakerDomainArgsDomainSettingsRStudioServerProDomainSettings;
}
export interface AwsSagemakerDomainArgsRetentionPolicy {
  home_efs_file_system?: string;
}
export interface AwsSagemakerDomainArgs {
  app_network_access_type?: string;
  app_security_group_management?: string;
  auth_mode: string;
  domain_name: string;
  kms_key_id?: string;
  subnet_ids: string[];
  tag_propagation?: string;
  tags?: {
    [key: string]: string;
  };
  vpc_id: string;
  default_space_settings: AwsSagemakerDomainArgsDefaultSpaceSettings;
  default_user_settings: AwsSagemakerDomainArgsDefaultUserSettings;
  domain_settings: AwsSagemakerDomainArgsDomainSettings;
  retention_policy: AwsSagemakerDomainArgsRetentionPolicy;
}
export class aws_sagemaker_domain extends TerraformResource {
  readonly arn!: string;
  readonly home_efs_file_system_id!: string;
  readonly id?: string;
  readonly security_group_id_for_domain_boundary!: string;
  readonly single_sign_on_application_arn!: string;
  readonly single_sign_on_managed_application_instance_id!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly url!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSagemakerDomainArgs) {
    super(config, "resource", args, resourceName, "aws_sagemaker_domain");
  }
}