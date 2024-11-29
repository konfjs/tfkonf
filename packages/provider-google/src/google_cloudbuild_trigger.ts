import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleCloudbuildTriggerArgsApprovalConfig {
  approval_required?: boolean;
}
export interface GoogleCloudbuildTriggerArgsBitbucketServerTriggerConfigPullRequest {
  branch: string;
  comment_control?: string;
  invert_regex?: boolean;
}
export interface GoogleCloudbuildTriggerArgsBitbucketServerTriggerConfigpush {
  branch?: string;
  invert_regex?: boolean;
  tag?: string;
}
export interface GoogleCloudbuildTriggerArgsBitbucketServerTriggerConfig {
  bitbucket_server_config_resource: string;
  project_key: string;
  repo_slug: string;
  pull_request: GoogleCloudbuildTriggerArgsBitbucketServerTriggerConfigPullRequest;
  push: GoogleCloudbuildTriggerArgsBitbucketServerTriggerConfigpush;
}
export interface GoogleCloudbuildTriggerArgsbuildartifactsMavenArtifacts {
  artifact_id?: string;
  group_id?: string;
  path?: string;
  repository?: string;
  version?: string;
}
export interface GoogleCloudbuildTriggerArgsbuildartifactsNpmPackages {
  package_path?: string;
  repository?: string;
}
export interface GoogleCloudbuildTriggerArgsbuildartifactsobjects {
  location?: string;
  paths?: string[];
}
export interface GoogleCloudbuildTriggerArgsbuildartifactsPythonPackages {
  paths?: string[];
  repository?: string;
}
export interface GoogleCloudbuildTriggerArgsbuildartifacts {
  images?: string[];
  maven_artifacts: GoogleCloudbuildTriggerArgsbuildartifactsMavenArtifacts;
  npm_packages: GoogleCloudbuildTriggerArgsbuildartifactsNpmPackages;
  objects: GoogleCloudbuildTriggerArgsbuildartifactsobjects;
  python_packages: GoogleCloudbuildTriggerArgsbuildartifactsPythonPackages;
}
export interface GoogleCloudbuildTriggerArgsbuildAvailableSecretsSecretManager {
  env: string;
  version_name: string;
}
export interface GoogleCloudbuildTriggerArgsbuildAvailableSecrets {
  secret_manager: GoogleCloudbuildTriggerArgsbuildAvailableSecretsSecretManager;
}
export interface GoogleCloudbuildTriggerArgsbuildoptionsvolumes {
  name?: string;
  path?: string;
}
export interface GoogleCloudbuildTriggerArgsbuildoptions {
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
  volumes: GoogleCloudbuildTriggerArgsbuildoptionsvolumes;
}
export interface GoogleCloudbuildTriggerArgsbuildsecret {
  kms_key_name: string;
  secret_env?: {
    [key: string]: string;
  };
}
export interface GoogleCloudbuildTriggerArgsbuildsourceRepoSource {
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
export interface GoogleCloudbuildTriggerArgsbuildsourceStorageSource {
  bucket: string;
  generation?: string;
  object: string;
}
export interface GoogleCloudbuildTriggerArgsbuildsource {
  repo_source: GoogleCloudbuildTriggerArgsbuildsourceRepoSource;
  storage_source: GoogleCloudbuildTriggerArgsbuildsourceStorageSource;
}
export interface GoogleCloudbuildTriggerArgsbuildstepvolumes {
  name: string;
  path: string;
}
export interface GoogleCloudbuildTriggerArgsbuildstep {
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
  volumes: GoogleCloudbuildTriggerArgsbuildstepvolumes;
}
export interface GoogleCloudbuildTriggerArgsbuild {
  images?: string[];
  logs_bucket?: string;
  queue_ttl?: string;
  substitutions?: {
    [key: string]: string;
  };
  tags?: string[];
  timeout?: string;
  artifacts: GoogleCloudbuildTriggerArgsbuildartifacts;
  available_secrets: GoogleCloudbuildTriggerArgsbuildAvailableSecrets;
  options: GoogleCloudbuildTriggerArgsbuildoptions;
  secret: GoogleCloudbuildTriggerArgsbuildsecret;
  source: GoogleCloudbuildTriggerArgsbuildsource;
  step: GoogleCloudbuildTriggerArgsbuildstep;
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
export interface GoogleCloudbuildTriggerArgsgithubPullRequest {
  branch: string;
  comment_control?: string;
  invert_regex?: boolean;
}
export interface GoogleCloudbuildTriggerArgsgithubpush {
  branch?: string;
  invert_regex?: boolean;
  tag?: string;
}
export interface GoogleCloudbuildTriggerArgsgithub {
  enterprise_config_resource_name?: string;
  name?: string;
  owner?: string;
  pull_request: GoogleCloudbuildTriggerArgsgithubPullRequest;
  push: GoogleCloudbuildTriggerArgsgithubpush;
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
export interface GoogleCloudbuildTriggerArgsRepositoryEventConfigpush {
  branch?: string;
  invert_regex?: boolean;
  tag?: string;
}
export interface GoogleCloudbuildTriggerArgsRepositoryEventConfig {
  repository?: string;
  pull_request: GoogleCloudbuildTriggerArgsRepositoryEventConfigPullRequest;
  push: GoogleCloudbuildTriggerArgsRepositoryEventConfigpush;
}
export interface GoogleCloudbuildTriggerArgsSourceToBuild {
  bitbucket_server_config?: string;
  github_enterprise_config?: string;
  ref: string;
  repo_type: string;
  repository?: string;
  uri?: string;
}
export interface GoogleCloudbuildTriggerArgstimeouts {
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
  build: GoogleCloudbuildTriggerArgsbuild;
  git_file_source: GoogleCloudbuildTriggerArgsGitFileSource;
  github: GoogleCloudbuildTriggerArgsgithub;
  pubsub_config: GoogleCloudbuildTriggerArgsPubsubConfig;
  repository_event_config: GoogleCloudbuildTriggerArgsRepositoryEventConfig;
  source_to_build: GoogleCloudbuildTriggerArgsSourceToBuild;
  timeouts: GoogleCloudbuildTriggerArgstimeouts;
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