import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleHealthcareFhirStoreArgsNotificationConfig {
  pubsub_topic: string;
}
export interface GoogleHealthcareFhirStoreArgsNotificationConfigs {
  pubsub_topic: string;
  send_full_resource?: boolean;
  send_previous_resource_on_delete?: boolean;
}
export interface GoogleHealthcareFhirStoreArgsStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig {
  expiration_ms?: string;
  type: string;
}
export interface GoogleHealthcareFhirStoreArgsStreamConfigsBigqueryDestinationSchemaConfig {
  recursive_structure_depth: number;
  schema_type?: string;
  last_updated_partition_config: GoogleHealthcareFhirStoreArgsStreamConfigsBigqueryDestinationSchemaConfigLastUpdatedPartitionConfig;
}
export interface GoogleHealthcareFhirStoreArgsStreamConfigsBigqueryDestination {
  dataset_uri: string;
  schema_config: GoogleHealthcareFhirStoreArgsStreamConfigsBigqueryDestinationSchemaConfig;
}
export interface GoogleHealthcareFhirStoreArgsStreamConfigs {
  resource_types?: string[];
  bigquery_destination: GoogleHealthcareFhirStoreArgsStreamConfigsBigqueryDestination;
}
export interface GoogleHealthcareFhirStoreArgsTimeouts {
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
  notification_config: GoogleHealthcareFhirStoreArgsNotificationConfig;
  notification_configs: GoogleHealthcareFhirStoreArgsNotificationConfigs;
  stream_configs: GoogleHealthcareFhirStoreArgsStreamConfigs;
  timeouts: GoogleHealthcareFhirStoreArgsTimeouts;
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