import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleHealthcarePipelineJobArgsBackfillPipelineJob {
  mapping_pipeline_job?: string;
}
export interface GoogleHealthcarePipelineJobArgsMappingPipelineJobFhirStreamingSource {
  description?: string;
  fhir_store: string;
}
export interface GoogleHealthcarePipelineJobArgsMappingPipelineJobMappingConfigWhistleConfigSource {
  import_uri_prefix: string;
  uri: string;
}
export interface GoogleHealthcarePipelineJobArgsMappingPipelineJobMappingConfig {
  description?: string;
  whistle_config_source: GoogleHealthcarePipelineJobArgsMappingPipelineJobMappingConfigWhistleConfigSource;
}
export interface GoogleHealthcarePipelineJobArgsMappingPipelineJob {
  fhir_store_destination?: string;
  reconciliation_destination?: boolean;
  fhir_streaming_source: GoogleHealthcarePipelineJobArgsMappingPipelineJobFhirStreamingSource;
  mapping_config: GoogleHealthcarePipelineJobArgsMappingPipelineJobMappingConfig;
}
export interface GoogleHealthcarePipelineJobArgsReconciliationPipelineJobMergeConfigWhistleConfigSource {
  import_uri_prefix: string;
  uri: string;
}
export interface GoogleHealthcarePipelineJobArgsReconciliationPipelineJobMergeConfig {
  description?: string;
  whistle_config_source: GoogleHealthcarePipelineJobArgsReconciliationPipelineJobMergeConfigWhistleConfigSource;
}
export interface GoogleHealthcarePipelineJobArgsReconciliationPipelineJob {
  fhir_store_destination?: string;
  matching_uri_prefix: string;
  merge_config: GoogleHealthcarePipelineJobArgsReconciliationPipelineJobMergeConfig;
}
export interface GoogleHealthcarePipelineJobArgsTimeouts {
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
  backfill_pipeline_job: GoogleHealthcarePipelineJobArgsBackfillPipelineJob;
  mapping_pipeline_job: GoogleHealthcarePipelineJobArgsMappingPipelineJob;
  reconciliation_pipeline_job: GoogleHealthcarePipelineJobArgsReconciliationPipelineJob;
  timeouts?: GoogleHealthcarePipelineJobArgsTimeouts;
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