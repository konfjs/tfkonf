import { TerraformConfig, TerraformResource } from "tfs";
export interface BackfillPipelineJob {
  mapping_pipeline_job?: string;
}
export interface FhirStreamingSource {
  description?: string;
  fhir_store: string;
}
export interface WhistleConfigSource {
  import_uri_prefix: string;
  uri: string;
}
export interface MappingConfig {
  description?: string;
  whistle_config_source: WhistleConfigSource;
}
export interface MappingPipelineJob {
  fhir_store_destination?: string;
  reconciliation_destination?: boolean;
  fhir_streaming_source: FhirStreamingSource;
  mapping_config: MappingConfig;
}
export interface WhistleConfigSource {
  import_uri_prefix: string;
  uri: string;
}
export interface MergeConfig {
  description?: string;
  whistle_config_source: WhistleConfigSource;
}
export interface ReconciliationPipelineJob {
  fhir_store_destination?: string;
  matching_uri_prefix: string;
  merge_config: MergeConfig;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleHealthcarePipelineJobArgs {
  dataset: string;
  disable_lineage?: boolean;
  labels?: {
    [key: string]: string;
  };
  location: string;
  name: string;
  backfill_pipeline_job: BackfillPipelineJob;
  mapping_pipeline_job: MappingPipelineJob;
  reconciliation_pipeline_job: ReconciliationPipelineJob;
  timeouts: Timeouts;
}
export class google_healthcare_pipeline_job extends TerraformResource {
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly self_link!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: GoogleHealthcarePipelineJobArgs) {
    super(config, "resource", args, resourceName, "google_healthcare_pipeline_job");
  }
}