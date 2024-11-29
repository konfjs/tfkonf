import { TerraformConfig, TerraformResource } from "tfs";
export interface NotificationConfig {
  pubsub_topic: string;
}
export interface NotificationConfigs {
  pubsub_topic: string;
  send_full_resource?: boolean;
  send_previous_resource_on_delete?: boolean;
}
export interface LastUpdatedPartitionConfig {
  expiration_ms?: string;
  type: string;
}
export interface SchemaConfig {
  recursive_structure_depth: number;
  schema_type?: string;
  last_updated_partition_config: LastUpdatedPartitionConfig;
}
export interface BigqueryDestination {
  dataset_uri: string;
  schema_config: SchemaConfig;
}
export interface StreamConfigs {
  resource_types?: string[];
  bigquery_destination: BigqueryDestination;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleHealthcareFhirStoreArgs {
  dataset: string;
  default_search_handling_strict?: boolean;
  disable_referential_integrity?: boolean;
  disable_resource_versioning?: boolean;
  enable_history_import?: boolean;
  enable_update_create?: boolean;
  labels?: {
    [key: string]: string;
  };
  name: string;
  version: string;
  notification_config: NotificationConfig;
  notification_configs: NotificationConfigs;
  stream_configs: StreamConfigs;
  timeouts: Timeouts;
}
export class google_healthcare_fhir_store extends TerraformResource {
  readonly complex_data_type_reference_parsing?: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly self_link!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: GoogleHealthcareFhirStoreArgs) {
    super(config, "resource", args, resourceName, "google_healthcare_fhir_store");
  }
}