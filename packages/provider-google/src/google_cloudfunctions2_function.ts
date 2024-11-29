import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleCloudfunctions2FunctionArgsBuildConfigAutomaticUpdatePolicy {}
export interface GoogleCloudfunctions2FunctionArgsBuildConfigOnDeployUpdatePolicy {}
export interface GoogleCloudfunctions2FunctionArgsBuildConfigsourceRepoSource {
  branch_name?: string;
  commit_sha?: string;
  dir?: string;
  invert_regex?: boolean;
  project_id?: string;
  repo_name?: string;
  tag_name?: string;
}
export interface GoogleCloudfunctions2FunctionArgsBuildConfigsourceStorageSource {
  bucket?: string;
  object?: string;
}
export interface GoogleCloudfunctions2FunctionArgsBuildConfigsource {
  repo_source: GoogleCloudfunctions2FunctionArgsBuildConfigsourceRepoSource;
  storage_source: GoogleCloudfunctions2FunctionArgsBuildConfigsourceStorageSource;
}
export interface GoogleCloudfunctions2FunctionArgsBuildConfig {
  entry_point?: string;
  runtime?: string;
  worker_pool?: string;
  automatic_update_policy: GoogleCloudfunctions2FunctionArgsBuildConfigAutomaticUpdatePolicy;
  on_deploy_update_policy: GoogleCloudfunctions2FunctionArgsBuildConfigOnDeployUpdatePolicy;
  source: GoogleCloudfunctions2FunctionArgsBuildConfigsource;
}
export interface GoogleCloudfunctions2FunctionArgsEventTriggerEventFilters {
  attribute: string;
  operator?: string;
  value: string;
}
export interface GoogleCloudfunctions2FunctionArgsEventTrigger {
  event_type?: string;
  retry_policy?: string;
  event_filters: GoogleCloudfunctions2FunctionArgsEventTriggerEventFilters;
}
export interface GoogleCloudfunctions2FunctionArgsServiceConfigSecretEnvironmentVariables {
  key: string;
  project_id: string;
  secret: string;
  version: string;
}
export interface GoogleCloudfunctions2FunctionArgsServiceConfigSecretVolumesversions {
  path: string;
  version: string;
}
export interface GoogleCloudfunctions2FunctionArgsServiceConfigSecretVolumes {
  mount_path: string;
  project_id: string;
  secret: string;
  versions: GoogleCloudfunctions2FunctionArgsServiceConfigSecretVolumesversions;
}
export interface GoogleCloudfunctions2FunctionArgsServiceConfig {
  all_traffic_on_latest_revision?: boolean;
  ingress_settings?: string;
  min_instance_count?: number;
  vpc_connector?: string;
  vpc_connector_egress_settings?: string;
  secret_environment_variables: GoogleCloudfunctions2FunctionArgsServiceConfigSecretEnvironmentVariables;
  secret_volumes: GoogleCloudfunctions2FunctionArgsServiceConfigSecretVolumes;
}
export interface GoogleCloudfunctions2FunctionArgstimeouts {
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
  build_config: GoogleCloudfunctions2FunctionArgsBuildConfig;
  event_trigger: GoogleCloudfunctions2FunctionArgsEventTrigger;
  service_config: GoogleCloudfunctions2FunctionArgsServiceConfig;
  timeouts: GoogleCloudfunctions2FunctionArgstimeouts;
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