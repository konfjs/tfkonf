import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleCloudbuildTriggerArgsApprovalConfig {
  approval_required?: boolean;
}
export interface GoogleCloudbuildTriggerArgsBitbucketServerTriggerConfigPullRequest {
  branch: string;
  comment_control?: string;
  invert_regex?: boolean;
}
export interface GoogleCloudbuildTriggerArgsBitbucketServerTriggerConfigPush {
  branch?: string;
  invert_regex?: boolean;
  tag?: string;
}
export interface GoogleCloudbuildTriggerArgsBitbucketServerTriggerConfig {
  bitbucket_server_config_resource: string;
  project_key: string;
  repo_slug: string;
  pull_request: GoogleCloudbuildTriggerArgsBitbucketServerTriggerConfigPullRequest;
  push: GoogleCloudbuildTriggerArgsBitbucketServerTriggerConfigPush;
}
export interface GoogleCloudbuildTriggerArgsBuildArtifactsMavenArtifacts {
  artifact_id?: string;
  group_id?: string;
  path?: string;
  repository?: string;
  version?: string;
}
export interface GoogleCloudbuildTriggerArgsBuildArtifactsNpmPackages {
  package_path?: string;
  repository?: string;
}
export interface GoogleCloudbuildTriggerArgsBuildArtifactsObjects {
  location?: string;
  paths?: string[];
}
export interface GoogleCloudbuildTriggerArgsBuildArtifactsPythonPackages {
  paths?: string[];
  repository?: string;
}
export interface GoogleCloudbuildTriggerArgsBuildArtifacts {
  images?: string[];
  maven_artifacts: GoogleCloudbuildTriggerArgsBuildArtifactsMavenArtifacts;
  npm_packages: GoogleCloudbuildTriggerArgsBuildArtifactsNpmPackages;
  objects: GoogleCloudbuildTriggerArgsBuildArtifactsObjects;
  python_packages: GoogleCloudbuildTriggerArgsBuildArtifactsPythonPackages;
}
export interface GoogleCloudbuildTriggerArgsBuildAvailableSecretsSecretManager {
  env: string;
  version_name: string;
}
export interface GoogleCloudbuildTriggerArgsBuildAvailableSecrets {
  secret_manager: GoogleCloudbuildTriggerArgsBuildAvailableSecretsSecretManager;
}
export interface GoogleCloudbuildTriggerArgsBuildOptionsVolumes {
  name?: string;
  path?: string;
}
export interface GoogleCloudbuildTriggerArgsBuildOptions {
  disk_size_gb?: number;
  dynamic_substitutions?: boolean;
  env?: string[];
  log_streaming_option?: string;
  logging?: string;
  machine_type?: string;
  requested_verify_option?: string;
  secret_env?: string[];
  source_provenance_hash?: string[];
  substitution_option?: string;
  worker_pool?: string;
  volumes: GoogleCloudbuildTriggerArgsBuildOptionsVolumes;
}
export interface GoogleCloudbuildTriggerArgsBuildSecret {
  kms_key_name: string;
  secret_env?: {
    [key: string]: string;
  };
}
export interface GoogleCloudbuildTriggerArgsBuildSourceRepoSource {
  branch_name?: string;
  commit_sha?: string;
  dir?: string;
  invert_regex?: boolean;
  project_id?: string;
  repo_name: string;
  substitutions?: {
    [key: string]: string;
  };
  tag_name?: string;
}
export interface GoogleCloudbuildTriggerArgsBuildSourceStorageSource {
  bucket: string;
  generation?: string;
  object: string;
}
export interface GoogleCloudbuildTriggerArgsBuildSource {
  repo_source: GoogleCloudbuildTriggerArgsBuildSourceRepoSource;
  storage_source: GoogleCloudbuildTriggerArgsBuildSourceStorageSource;
}
export interface GoogleCloudbuildTriggerArgsBuildStepVolumes {
  name: string;
  path: string;
}
export interface GoogleCloudbuildTriggerArgsBuildStep {
  allow_exit_codes?: number[];
  allow_failure?: boolean;
  args?: string[];
  dir?: string;
  entrypoint?: string;
  env?: string[];
  id?: string;
  name: string;
  script?: string;
  secret_env?: string[];
  timeout?: string;
  timing?: string;
  wait_for?: string[];
  volumes: GoogleCloudbuildTriggerArgsBuildStepVolumes;
}
export interface GoogleCloudbuildTriggerArgsBuild {
  images?: string[];
  logs_bucket?: string;
  queue_ttl?: string;
  substitutions?: {
    [key: string]: string;
  };
  tags?: string[];
  timeout?: string;
  artifacts: GoogleCloudbuildTriggerArgsBuildArtifacts;
  available_secrets: GoogleCloudbuildTriggerArgsBuildAvailableSecrets;
  options: GoogleCloudbuildTriggerArgsBuildOptions;
  secret: GoogleCloudbuildTriggerArgsBuildSecret;
  source: GoogleCloudbuildTriggerArgsBuildSource;
  step: GoogleCloudbuildTriggerArgsBuildStep;
}
export interface GoogleCloudbuildTriggerArgsGitFileSource {
  bitbucket_server_config?: string;
  github_enterprise_config?: string;
  path: string;
  repo_type: string;
  repository?: string;
  revision?: string;
  uri?: string;
}
export interface GoogleCloudbuildTriggerArgsGithubPullRequest {
  branch: string;
  comment_control?: string;
  invert_regex?: boolean;
}
export interface GoogleCloudbuildTriggerArgsGithubPush {
  branch?: string;
  invert_regex?: boolean;
  tag?: string;
}
export interface GoogleCloudbuildTriggerArgsGithub {
  enterprise_config_resource_name?: string;
  name?: string;
  owner?: string;
  pull_request: GoogleCloudbuildTriggerArgsGithubPullRequest;
  push: GoogleCloudbuildTriggerArgsGithubPush;
}
export interface GoogleCloudbuildTriggerArgsPubsubConfig {
  service_account_email?: string;
  topic: string;
}
export interface GoogleCloudbuildTriggerArgsRepositoryEventConfigPullRequest {
  branch?: string;
  comment_control?: string;
  invert_regex?: boolean;
}
export interface GoogleCloudbuildTriggerArgsRepositoryEventConfigPush {
  branch?: string;
  invert_regex?: boolean;
  tag?: string;
}
export interface GoogleCloudbuildTriggerArgsRepositoryEventConfig {
  repository?: string;
  pull_request: GoogleCloudbuildTriggerArgsRepositoryEventConfigPullRequest;
  push: GoogleCloudbuildTriggerArgsRepositoryEventConfigPush;
}
export interface GoogleCloudbuildTriggerArgsSourceToBuild {
  bitbucket_server_config?: string;
  github_enterprise_config?: string;
  ref: string;
  repo_type: string;
  repository?: string;
  uri?: string;
}
export interface GoogleCloudbuildTriggerArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleCloudbuildTriggerArgsTriggerTemplate {
  branch_name?: string;
  commit_sha?: string;
  dir?: string;
  invert_regex?: boolean;
  repo_name?: string;
  tag_name?: string;
}
export interface GoogleCloudbuildTriggerArgsWebhookConfig {
  secret: string;
}
export interface GoogleCloudbuildTriggerArgs {
  description?: string;
  disabled?: boolean;
  filename?: string;
  filter?: string;
  ignored_files?: string[];
  include_build_logs?: string;
  included_files?: string[];
  location?: string;
  service_account?: string;
  substitutions?: {
    [key: string]: string;
  };
  tags?: string[];
  approval_config: GoogleCloudbuildTriggerArgsApprovalConfig;
  bitbucket_server_trigger_config: GoogleCloudbuildTriggerArgsBitbucketServerTriggerConfig;
  build: GoogleCloudbuildTriggerArgsBuild;
  git_file_source: GoogleCloudbuildTriggerArgsGitFileSource;
  github: GoogleCloudbuildTriggerArgsGithub;
  pubsub_config: GoogleCloudbuildTriggerArgsPubsubConfig;
  repository_event_config: GoogleCloudbuildTriggerArgsRepositoryEventConfig;
  source_to_build: GoogleCloudbuildTriggerArgsSourceToBuild;
  timeouts?: GoogleCloudbuildTriggerArgsTimeouts;
  trigger_template: GoogleCloudbuildTriggerArgsTriggerTemplate;
  webhook_config: GoogleCloudbuildTriggerArgsWebhookConfig;
}
export class google_cloudbuild_trigger extends TerraformResource {
  readonly create_time!: string;
  readonly id?: string;
  readonly name?: string;
  readonly project?: string;
  readonly trigger_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleCloudbuildTriggerArgs) {
    super(config, "resource", args, resourceName, "google_cloudbuild_trigger");
  }
}