import { TerraformConfig, TerraformResource } from "tfs";
export interface Artifacts {
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
export interface Restrictions {
  compute_types_allowed?: string[];
  maximum_builds_allowed?: number;
}
export interface BuildBatchConfig {
  combine_artifacts?: boolean;
  service_role: string;
  timeout_in_mins?: number;
  restrictions: Restrictions;
}
export interface Cache {
  location?: string;
  modes?: string[];
  type?: string;
}
export interface EnvironmentVariable {
  name: string;
  type?: string;
  value: string;
}
export interface Fleet {
  fleet_arn?: string;
}
export interface RegistryCredential {
  credential: string;
  credential_provider: string;
}
export interface Environment {
  certificate?: string;
  compute_type: string;
  image: string;
  image_pull_credentials_type?: string;
  privileged_mode?: boolean;
  type: string;
  environment_variable: EnvironmentVariable;
  fleet: Fleet;
  registry_credential: RegistryCredential;
}
export interface FileSystemLocations {
  identifier?: string;
  location?: string;
  mount_options?: string;
  mount_point?: string;
  type?: string;
}
export interface CloudwatchLogs {
  group_name?: string;
  status?: string;
  stream_name?: string;
}
export interface S3Logs {
  bucket_owner_access?: string;
  encryption_disabled?: boolean;
  location?: string;
  status?: string;
}
export interface LogsConfig {
  cloudwatch_logs: CloudwatchLogs;
  s3_logs: S3Logs;
}
export interface SecondaryArtifacts {
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
export interface SecondarySourceVersion {
  source_identifier: string;
  source_version: string;
}
export interface BuildStatusConfig {
  context?: string;
  target_url?: string;
}
export interface GitSubmodulesConfig {
  fetch_submodules: boolean;
}
export interface SecondarySources {
  buildspec?: string;
  git_clone_depth?: number;
  insecure_ssl?: boolean;
  location?: string;
  report_build_status?: boolean;
  source_identifier: string;
  type: string;
  build_status_config: BuildStatusConfig;
  git_submodules_config: GitSubmodulesConfig;
}
export interface BuildStatusConfig {
  context?: string;
  target_url?: string;
}
export interface GitSubmodulesConfig {
  fetch_submodules: boolean;
}
export interface Source {
  buildspec?: string;
  git_clone_depth?: number;
  insecure_ssl?: boolean;
  location?: string;
  report_build_status?: boolean;
  type: string;
  build_status_config: BuildStatusConfig;
  git_submodules_config: GitSubmodulesConfig;
}
export interface VpcConfig {
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
  tags?: {
    [key: string]: string;
  };
  artifacts: Artifacts;
  build_batch_config: BuildBatchConfig;
  cache: Cache;
  environment: Environment;
  file_system_locations: FileSystemLocations;
  logs_config: LogsConfig;
  secondary_artifacts: SecondaryArtifacts;
  secondary_source_version: SecondarySourceVersion;
  secondary_sources: SecondarySources;
  source: Source;
  vpc_config: VpcConfig;
}
export class aws_codebuild_project extends TerraformResource {
  readonly arn!: string;
  readonly badge_url!: string;
  readonly description?: string;
  readonly encryption_key?: string;
  readonly id?: string;
  readonly public_project_alias!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsCodebuildProjectArgs) {
    super(config, "resource", args, resourceName, "aws_codebuild_project");
  }
}