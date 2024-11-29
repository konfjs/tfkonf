import { TerraformConfig, TerraformResource } from "tfs";
export interface EfsFileSystemConfig {
  file_system_id: string;
  file_system_path: string;
}
export interface CustomFileSystemConfig {
  efs_file_system_config: EfsFileSystemConfig;
}
export interface CustomPosixUserConfig {
  gid: number;
  uid: number;
}
export interface IdleSettings {
  idle_timeout_in_minutes?: number;
  lifecycle_management?: string;
  max_idle_timeout_in_minutes?: number;
  min_idle_timeout_in_minutes?: number;
}
export interface AppLifecycleManagement {
  idle_settings: IdleSettings;
}
export interface CodeRepository {
  repository_url: string;
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
export interface EmrSettings {
  assumable_role_arns?: string[];
  execution_role_arns?: string[];
}
export interface JupyterLabAppSettings {
  built_in_lifecycle_config_arn?: string;
  lifecycle_config_arns?: string[];
  app_lifecycle_management: AppLifecycleManagement;
  code_repository: CodeRepository;
  custom_image: CustomImage;
  default_resource_spec: DefaultResourceSpec;
  emr_settings: EmrSettings;
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
export interface DefaultEbsStorageSettings {
  default_ebs_volume_size_in_gb: number;
  maximum_ebs_volume_size_in_gb: number;
}
export interface SpaceStorageSettings {
  default_ebs_storage_settings: DefaultEbsStorageSettings;
}
export interface DefaultSpaceSettings {
  execution_role: string;
  security_groups?: string[];
  custom_file_system_config: CustomFileSystemConfig;
  custom_posix_user_config: CustomPosixUserConfig;
  jupyter_lab_app_settings: JupyterLabAppSettings;
  jupyter_server_app_settings: JupyterServerAppSettings;
  kernel_gateway_app_settings: KernelGatewayAppSettings;
  space_storage_settings: SpaceStorageSettings;
}
export interface DirectDeploySettings {
  status?: string;
}
export interface EmrServerlessSettings {
  execution_role_arn?: string;
  status?: string;
}
export interface GenerativeAiSettings {
  amazon_bedrock_role_arn?: string;
}
export interface IdentityProviderOauthSettings {
  data_source_name?: string;
  secret_arn: string;
  status?: string;
}
export interface KendraSettings {
  status?: string;
}
export interface ModelRegisterSettings {
  cross_account_model_register_role_arn?: string;
  status?: string;
}
export interface TimeSeriesForecastingSettings {
  amazon_forecast_role_arn?: string;
  status?: string;
}
export interface WorkspaceSettings {
  s3_artifact_path?: string;
  s3_kms_key_id?: string;
}
export interface CanvasAppSettings {
  direct_deploy_settings: DirectDeploySettings;
  emr_serverless_settings: EmrServerlessSettings;
  generative_ai_settings: GenerativeAiSettings;
  identity_provider_oauth_settings: IdentityProviderOauthSettings;
  kendra_settings: KendraSettings;
  model_register_settings: ModelRegisterSettings;
  time_series_forecasting_settings: TimeSeriesForecastingSettings;
  workspace_settings: WorkspaceSettings;
}
export interface IdleSettings {
  idle_timeout_in_minutes?: number;
  lifecycle_management?: string;
  max_idle_timeout_in_minutes?: number;
  min_idle_timeout_in_minutes?: number;
}
export interface AppLifecycleManagement {
  idle_settings: IdleSettings;
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
export interface CodeEditorAppSettings {
  built_in_lifecycle_config_arn?: string;
  lifecycle_config_arns?: string[];
  app_lifecycle_management: AppLifecycleManagement;
  custom_image: CustomImage;
  default_resource_spec: DefaultResourceSpec;
}
export interface EfsFileSystemConfig {
  file_system_id: string;
  file_system_path: string;
}
export interface CustomFileSystemConfig {
  efs_file_system_config: EfsFileSystemConfig;
}
export interface CustomPosixUserConfig {
  gid: number;
  uid: number;
}
export interface IdleSettings {
  idle_timeout_in_minutes?: number;
  lifecycle_management?: string;
  max_idle_timeout_in_minutes?: number;
  min_idle_timeout_in_minutes?: number;
}
export interface AppLifecycleManagement {
  idle_settings: IdleSettings;
}
export interface CodeRepository {
  repository_url: string;
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
export interface EmrSettings {
  assumable_role_arns?: string[];
  execution_role_arns?: string[];
}
export interface JupyterLabAppSettings {
  built_in_lifecycle_config_arn?: string;
  lifecycle_config_arns?: string[];
  app_lifecycle_management: AppLifecycleManagement;
  code_repository: CodeRepository;
  custom_image: CustomImage;
  default_resource_spec: DefaultResourceSpec;
  emr_settings: EmrSettings;
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
export interface RSessionAppSettings {
  custom_image: CustomImage;
  default_resource_spec: DefaultResourceSpec;
}
export interface RStudioServerProAppSettings {
  access_status?: string;
  user_group?: string;
}
export interface SharingSettings {
  notebook_output_option?: string;
  s3_kms_key_id?: string;
  s3_output_path?: string;
}
export interface DefaultEbsStorageSettings {
  default_ebs_volume_size_in_gb: number;
  maximum_ebs_volume_size_in_gb: number;
}
export interface SpaceStorageSettings {
  default_ebs_storage_settings: DefaultEbsStorageSettings;
}
export interface StudioWebPortalSettings {
  hidden_app_types?: string[];
  hidden_instance_types?: string[];
  hidden_ml_tools?: string[];
}
export interface DefaultResourceSpec {
  instance_type?: string;
  lifecycle_config_arn?: string;
  sagemaker_image_arn?: string;
  sagemaker_image_version_alias?: string;
  sagemaker_image_version_arn?: string;
}
export interface TensorBoardAppSettings {
  default_resource_spec: DefaultResourceSpec;
}
export interface DefaultUserSettings {
  execution_role: string;
  security_groups?: string[];
  canvas_app_settings: CanvasAppSettings;
  code_editor_app_settings: CodeEditorAppSettings;
  custom_file_system_config: CustomFileSystemConfig;
  custom_posix_user_config: CustomPosixUserConfig;
  jupyter_lab_app_settings: JupyterLabAppSettings;
  jupyter_server_app_settings: JupyterServerAppSettings;
  kernel_gateway_app_settings: KernelGatewayAppSettings;
  r_session_app_settings: RSessionAppSettings;
  r_studio_server_pro_app_settings: RStudioServerProAppSettings;
  sharing_settings: SharingSettings;
  space_storage_settings: SpaceStorageSettings;
  studio_web_portal_settings: StudioWebPortalSettings;
  tensor_board_app_settings: TensorBoardAppSettings;
}
export interface DockerSettings {
  enable_docker_access?: string;
  vpc_only_trusted_accounts?: string[];
}
export interface DefaultResourceSpec {
  instance_type?: string;
  lifecycle_config_arn?: string;
  sagemaker_image_arn?: string;
  sagemaker_image_version_alias?: string;
  sagemaker_image_version_arn?: string;
}
export interface RStudioServerProDomainSettings {
  domain_execution_role_arn: string;
  r_studio_connect_url?: string;
  r_studio_package_manager_url?: string;
  default_resource_spec: DefaultResourceSpec;
}
export interface DomainSettings {
  execution_role_identity_config?: string;
  security_group_ids?: string[];
  docker_settings: DockerSettings;
  r_studio_server_pro_domain_settings: RStudioServerProDomainSettings;
}
export interface RetentionPolicy {
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
  default_space_settings: DefaultSpaceSettings;
  default_user_settings: DefaultUserSettings;
  domain_settings: DomainSettings;
  retention_policy: RetentionPolicy;
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