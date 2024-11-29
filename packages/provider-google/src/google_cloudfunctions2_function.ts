import { TerraformConfig, TerraformResource } from "tfs";
export interface AutomaticUpdatePolicy {}
export interface OnDeployUpdatePolicy {}
export interface RepoSource {
  branch_name?: string;
  commit_sha?: string;
  dir?: string;
  invert_regex?: boolean;
  project_id?: string;
  repo_name?: string;
  tag_name?: string;
}
export interface StorageSource {
  bucket?: string;
  object?: string;
}
export interface Source {
  repo_source: RepoSource;
  storage_source: StorageSource;
}
export interface BuildConfig {
  entry_point?: string;
  runtime?: string;
  worker_pool?: string;
  automatic_update_policy: AutomaticUpdatePolicy;
  on_deploy_update_policy: OnDeployUpdatePolicy;
  source: Source;
}
export interface EventFilters {
  attribute: string;
  operator?: string;
  value: string;
}
export interface EventTrigger {
  event_type?: string;
  retry_policy?: string;
  event_filters: EventFilters;
}
export interface SecretEnvironmentVariables {
  key: string;
  project_id: string;
  secret: string;
  version: string;
}
export interface Versions {
  path: string;
  version: string;
}
export interface SecretVolumes {
  mount_path: string;
  project_id: string;
  secret: string;
  versions: Versions;
}
export interface ServiceConfig {
  all_traffic_on_latest_revision?: boolean;
  ingress_settings?: string;
  min_instance_count?: number;
  vpc_connector?: string;
  vpc_connector_egress_settings?: string;
  secret_environment_variables: SecretEnvironmentVariables;
  secret_volumes: SecretVolumes;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleCloudfunctions2FunctionArgs {
  description?: string;
  kms_key_name?: string;
  labels?: {
    [key: string]: string;
  };
  location: string;
  name: string;
  build_config: BuildConfig;
  event_trigger: EventTrigger;
  service_config: ServiceConfig;
  timeouts: Timeouts;
}
export class google_cloudfunctions2_function extends TerraformResource {
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly environment!: string;
  readonly id?: string;
  readonly project?: string;
  readonly state!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly update_time!: string;
  readonly url!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleCloudfunctions2FunctionArgs) {
    super(config, "resource", args, resourceName, "google_cloudfunctions2_function");
  }
}