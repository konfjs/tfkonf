import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleLoggingLinkedDatasetArgsBigqueryDataset {}
export interface GoogleLoggingLinkedDatasetArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleLoggingLinkedDatasetArgs {
  bucket: string;
  description?: string;
  link_id: string;
  bigquery_dataset: GoogleLoggingLinkedDatasetArgsBigqueryDataset;
  timeouts: GoogleLoggingLinkedDatasetArgsTimeouts;
}
export class google_logging_linked_dataset extends TerraformResource {
  readonly create_time!: string;
  readonly id?: string;
  readonly lifecycle_state!: string;
  readonly location?: string;
  readonly name!: string;
  readonly parent?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleLoggingLinkedDatasetArgs) {
    super(config, "resource", args, resourceName, "google_logging_linked_dataset");
  }
}