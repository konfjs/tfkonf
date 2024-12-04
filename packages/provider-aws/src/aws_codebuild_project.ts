import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCodebuildProjectArgsArtifacts {
  artifact_identifier?: string;
  bucket_owner_access?: string;
  encryption_disabled?: boolean;
  location?: string;
  name?: string;
  namespace_type?: string;
  override_artifact_name?: boolean;
  packaging?: string;
  path?: string;
  type: string;
}

export interface AwsCodebuildProjectArgsBuildBatchConfigRestrictions {
  compute_types_allowed?: string[];
  maximum_builds_allowed?: number;
}

export interface AwsCodebuildProjectArgsBuildBatchConfig {
  combine_artifacts?: boolean;
  service_role: string;
  timeout_in_mins?: number;
  restrictions: AwsCodebuildProjectArgsBuildBatchConfigRestrictions;
}

export interface AwsCodebuildProjectArgsCache {
  location?: string;
  modes?: string[];
  type?: string;
}

export interface AwsCodebuildProjectArgsEnvironmentEnvironmentVariable {
  name: string;
  type?: string;
  value: string;
}

export interface AwsCodebuildProjectArgsEnvironmentFleet {
  fleet_arn?: string;
}

export interface AwsCodebuildProjectArgsEnvironmentRegistryCredential {
  credential: string;
  credential_provider: string;
}

export interface AwsCodebuildProjectArgsEnvironment {
  certificate?: string;
  compute_type: string;
  image: string;
  image_pull_credentials_type?: string;
  privileged_mode?: boolean;
  type: string;
  environment_variable: AwsCodebuildProjectArgsEnvironmentEnvironmentVariable;
  fleet: AwsCodebuildProjectArgsEnvironmentFleet;
  registry_credential: AwsCodebuildProjectArgsEnvironmentRegistryCredential;
}

export interface AwsCodebuildProjectArgsFileSystemLocations {
  identifier?: string;
  location?: string;
  mount_options?: string;
  mount_point?: string;
  type?: string;
}

export interface AwsCodebuildProjectArgsLogsConfigCloudwatchLogs {
  group_name?: string;
  status?: string;
  stream_name?: string;
}

export interface AwsCodebuildProjectArgsLogsConfigS3Logs {
  bucket_owner_access?: string;
  encryption_disabled?: boolean;
  location?: string;
  status?: string;
}

export interface AwsCodebuildProjectArgsLogsConfig {
  cloudwatch_logs: AwsCodebuildProjectArgsLogsConfigCloudwatchLogs;
  s3_logs: AwsCodebuildProjectArgsLogsConfigS3Logs;
}

export interface AwsCodebuildProjectArgsSecondaryArtifacts {
  artifact_identifier: string;
  bucket_owner_access?: string;
  encryption_disabled?: boolean;
  location?: string;
  name?: string;
  namespace_type?: string;
  override_artifact_name?: boolean;
  packaging?: string;
  path?: string;
  type: string;
}

export interface AwsCodebuildProjectArgsSecondarySourceVersion {
  source_identifier: string;
  source_version: string;
}

export interface AwsCodebuildProjectArgsSecondarySourcesBuildStatusConfig {
  context?: string;
  target_url?: string;
}

export interface AwsCodebuildProjectArgsSecondarySourcesGitSubmodulesConfig {
  fetch_submodules: boolean;
}

export interface AwsCodebuildProjectArgsSecondarySources {
  buildspec?: string;
  git_clone_depth?: number;
  insecure_ssl?: boolean;
  location?: string;
  report_build_status?: boolean;
  source_identifier: string;
  type: string;
  build_status_config: AwsCodebuildProjectArgsSecondarySourcesBuildStatusConfig;
  git_submodules_config: AwsCodebuildProjectArgsSecondarySourcesGitSubmodulesConfig;
}

export interface AwsCodebuildProjectArgsSourceBuildStatusConfig {
  context?: string;
  target_url?: string;
}

export interface AwsCodebuildProjectArgsSourceGitSubmodulesConfig {
  fetch_submodules: boolean;
}

export interface AwsCodebuildProjectArgsSource {
  buildspec?: string;
  git_clone_depth?: number;
  insecure_ssl?: boolean;
  location?: string;
  report_build_status?: boolean;
  type: string;
  build_status_config: AwsCodebuildProjectArgsSourceBuildStatusConfig;
  git_submodules_config: AwsCodebuildProjectArgsSourceGitSubmodulesConfig;
}

export interface AwsCodebuildProjectArgsVpcConfig {
  security_group_ids: string[];
  subnets: string[];
  vpc_id: string;
}

export interface AwsCodebuildProjectArgs {
  badge_enabled?: boolean;
  build_timeout?: number;
  concurrent_build_limit?: number;
  name: string;
  project_visibility?: string;
  queued_timeout?: number;
  resource_access_role?: string;
  service_role: string;
  source_version?: string;
  tags?: { [key: string]: string };
  artifacts: AwsCodebuildProjectArgsArtifacts;
  build_batch_config: AwsCodebuildProjectArgsBuildBatchConfig;
  cache: AwsCodebuildProjectArgsCache;
  environment: AwsCodebuildProjectArgsEnvironment;
  file_system_locations: AwsCodebuildProjectArgsFileSystemLocations;
  logs_config: AwsCodebuildProjectArgsLogsConfig;
  secondary_artifacts: AwsCodebuildProjectArgsSecondaryArtifacts;
  secondary_source_version: AwsCodebuildProjectArgsSecondarySourceVersion;
  secondary_sources: AwsCodebuildProjectArgsSecondarySources;
  source: AwsCodebuildProjectArgsSource;
  vpc_config: AwsCodebuildProjectArgsVpcConfig;
}

export class aws_codebuild_project extends TerraformResource {
  readonly arn!: string;
  readonly badge_url!: string;
  readonly description?: string;
  readonly encryption_key?: string;
  readonly id?: string;
  readonly public_project_alias!: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsCodebuildProjectArgs) {
    super(config, "resource", args, resourceName, "aws_codebuild_project");
  }
}
