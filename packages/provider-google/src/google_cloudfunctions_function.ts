import { TerraformConfig, TerraformResource } from "tfs";
export interface FailurePolicy {
  retry: boolean;
}
export interface EventTrigger {
  event_type: string;
  resource: string;
  failure_policy: FailurePolicy;
}
export interface SecretEnvironmentVariables {
  key: string;
  secret: string;
  version: string;
}
export interface Versions {
  path: string;
  version: string;
}
export interface SecretVolumes {
  mount_path: string;
  secret: string;
  versions: Versions;
}
export interface SourceRepository {
  url: string;
}
export interface Timeouts {
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
  event_trigger: EventTrigger;
  secret_environment_variables: SecretEnvironmentVariables;
  secret_volumes: SecretVolumes;
  source_repository: SourceRepository;
  timeouts: Timeouts;
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