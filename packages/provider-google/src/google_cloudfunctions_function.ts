import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleCloudfunctionsFunctionArgsEventTriggerFailurePolicy {
  retry: boolean;
}
export interface GoogleCloudfunctionsFunctionArgsEventTrigger {
  event_type: string;
  resource: string;
  failure_policy: GoogleCloudfunctionsFunctionArgsEventTriggerFailurePolicy;
}
export interface GoogleCloudfunctionsFunctionArgsSecretEnvironmentVariables {
  key: string;
  secret: string;
  version: string;
}
export interface GoogleCloudfunctionsFunctionArgsSecretVolumesVersions {
  path: string;
  version: string;
}
export interface GoogleCloudfunctionsFunctionArgsSecretVolumes {
  mount_path: string;
  secret: string;
  versions: GoogleCloudfunctionsFunctionArgsSecretVolumesVersions;
}
export interface GoogleCloudfunctionsFunctionArgsSourceRepository {
  url: string;
}
export interface GoogleCloudfunctionsFunctionArgsTimeouts {
  create?: string;
  delete?: string;
  read?: string;
  update?: string;
}
export interface GoogleCloudfunctionsFunctionArgs {
  available_memory_mb?: number;
  build_environment_variables?: {
    [key: string]: string;
  };
  build_worker_pool?: string;
  description?: string;
  docker_repository?: string;
  entry_point?: string;
  environment_variables?: {
    [key: string]: string;
  };
  ingress_settings?: string;
  kms_key_name?: string;
  labels?: {
    [key: string]: string;
  };
  min_instances?: number;
  name: string;
  runtime: string;
  source_archive_bucket?: string;
  source_archive_object?: string;
  timeout?: number;
  trigger_http?: boolean;
  vpc_connector?: string;
  event_trigger: GoogleCloudfunctionsFunctionArgsEventTrigger;
  secret_environment_variables: GoogleCloudfunctionsFunctionArgsSecretEnvironmentVariables;
  secret_volumes: GoogleCloudfunctionsFunctionArgsSecretVolumes;
  source_repository: GoogleCloudfunctionsFunctionArgsSourceRepository;
  timeouts: GoogleCloudfunctionsFunctionArgsTimeouts;
}
export class google_cloudfunctions_function extends TerraformResource {
  readonly build_service_account?: string;
  readonly docker_registry?: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly https_trigger_security_level?: string;
  readonly https_trigger_url?: string;
  readonly id?: string;
  readonly max_instances?: number;
  readonly project?: string;
  readonly region?: string;
  readonly service_account_email?: string;
  readonly status!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly version_id!: string;
  readonly vpc_connector_egress_settings?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleCloudfunctionsFunctionArgs) {
    super(config, "resource", args, resourceName, "google_cloudfunctions_function");
  }
}