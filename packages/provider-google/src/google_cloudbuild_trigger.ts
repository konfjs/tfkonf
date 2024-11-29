import { TerraformConfig, TerraformResource } from "tfs";
export interface ApprovalConfig {
  approval_required?: boolean;
}
export interface PullRequest {
  branch: string;
  comment_control?: string;
  invert_regex?: boolean;
}
export interface Push {
  branch?: string;
  invert_regex?: boolean;
  tag?: string;
}
export interface BitbucketServerTriggerConfig {
  bitbucket_server_config_resource: string;
  project_key: string;
  repo_slug: string;
  pull_request: PullRequest;
  push: Push;
}
export interface MavenArtifacts {
  artifact_id?: string;
  group_id?: string;
  path?: string;
  repository?: string;
  version?: string;
}
export interface NpmPackages {
  package_path?: string;
  repository?: string;
}
export interface Objects {
  location?: string;
  paths?: string[];
}
export interface PythonPackages {
  paths?: string[];
  repository?: string;
}
export interface Artifacts {
  images?: string[];
  maven_artifacts: MavenArtifacts;
  npm_packages: NpmPackages;
  objects: Objects;
  python_packages: PythonPackages;
}
export interface SecretManager {
  env: string;
  version_name: string;
}
export interface AvailableSecrets {
  secret_manager: SecretManager;
}
export interface Volumes {
  name?: string;
  path?: string;
}
export interface Options {
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
  volumes: Volumes;
}
export interface Secret {
  kms_key_name: string;
  secret_env?: {
    [key: string]: string;
  };
}
export interface RepoSource {
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
export interface StorageSource {
  bucket: string;
  generation?: string;
  object: string;
}
export interface Source {
  repo_source: RepoSource;
  storage_source: StorageSource;
}
export interface Volumes {
  name: string;
  path: string;
}
export interface Step {
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
  volumes: Volumes;
}
export interface Build {
  images?: string[];
  logs_bucket?: string;
  queue_ttl?: string;
  substitutions?: {
    [key: string]: string;
  };
  tags?: string[];
  timeout?: string;
  artifacts: Artifacts;
  available_secrets: AvailableSecrets;
  options: Options;
  secret: Secret;
  source: Source;
  step: Step;
}
export interface GitFileSource {
  bitbucket_server_config?: string;
  github_enterprise_config?: string;
  path: string;
  repo_type: string;
  repository?: string;
  revision?: string;
  uri?: string;
}
export interface PullRequest {
  branch: string;
  comment_control?: string;
  invert_regex?: boolean;
}
export interface Push {
  branch?: string;
  invert_regex?: boolean;
  tag?: string;
}
export interface Github {
  enterprise_config_resource_name?: string;
  name?: string;
  owner?: string;
  pull_request: PullRequest;
  push: Push;
}
export interface PubsubConfig {
  service_account_email?: string;
  topic: string;
}
export interface PullRequest {
  branch?: string;
  comment_control?: string;
  invert_regex?: boolean;
}
export interface Push {
  branch?: string;
  invert_regex?: boolean;
  tag?: string;
}
export interface RepositoryEventConfig {
  repository?: string;
  pull_request: PullRequest;
  push: Push;
}
export interface SourceToBuild {
  bitbucket_server_config?: string;
  github_enterprise_config?: string;
  ref: string;
  repo_type: string;
  repository?: string;
  uri?: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface TriggerTemplate {
  branch_name?: string;
  commit_sha?: string;
  dir?: string;
  invert_regex?: boolean;
  repo_name?: string;
  tag_name?: string;
}
export interface WebhookConfig {
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
  approval_config: ApprovalConfig;
  bitbucket_server_trigger_config: BitbucketServerTriggerConfig;
  build: Build;
  git_file_source: GitFileSource;
  github: Github;
  pubsub_config: PubsubConfig;
  repository_event_config: RepositoryEventConfig;
  source_to_build: SourceToBuild;
  timeouts: Timeouts;
  trigger_template: TriggerTemplate;
  webhook_config: WebhookConfig;
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