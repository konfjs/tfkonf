import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleBigqueryDatasetAccessArgsDatasetDataset {
  dataset_id: string;
  project_id: string;
}
export interface GoogleBigqueryDatasetAccessArgsDataset {
  target_types: string[];
  dataset: GoogleBigqueryDatasetAccessArgsDatasetDataset;
}
export interface GoogleBigqueryDatasetAccessArgsRoutine {
  dataset_id: string;
  project_id: string;
  routine_id: string;
}
export interface GoogleBigqueryDatasetAccessArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleBigqueryDatasetAccessArgsView {
  dataset_id: string;
  project_id: string;
  table_id: string;
}
export interface GoogleBigqueryDatasetAccessArgs {
  dataset_id: string;
  domain?: string;
  group_by_email?: string;
  iam_member?: string;
  role?: string;
  special_group?: string;
  user_by_email?: string;
  dataset: GoogleBigqueryDatasetAccessArgsDataset;
  routine: GoogleBigqueryDatasetAccessArgsRoutine;
  timeouts?: GoogleBigqueryDatasetAccessArgsTimeouts;
  view: GoogleBigqueryDatasetAccessArgsView;
}
export class google_bigquery_dataset_access extends TerraformResource {
  readonly api_updated_member!: boolean;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleBigqueryDatasetAccessArgs) {
    super(config, "resource", args, resourceName, "google_bigquery_dataset_access");
  }
}