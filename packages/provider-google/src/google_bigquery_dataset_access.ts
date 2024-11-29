import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleBigqueryDatasetAccessArgsdatasetdataset {
  dataset_id: string;
  project_id: string;
}
export interface GoogleBigqueryDatasetAccessArgsdataset {
  target_types: string[];
  dataset: GoogleBigqueryDatasetAccessArgsdatasetdataset;
}
export interface GoogleBigqueryDatasetAccessArgsroutine {
  dataset_id: string;
  project_id: string;
  routine_id: string;
}
export interface GoogleBigqueryDatasetAccessArgstimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleBigqueryDatasetAccessArgsview {
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
  dataset: GoogleBigqueryDatasetAccessArgsdataset;
  routine: GoogleBigqueryDatasetAccessArgsroutine;
  timeouts: GoogleBigqueryDatasetAccessArgstimeouts;
  view: GoogleBigqueryDatasetAccessArgsview;
}
export class google_bigquery_dataset_access extends TerraformResource {
  readonly api_updated_member!: boolean;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleBigqueryDatasetAccessArgs) {
    super(config, "resource", args, resourceName, "google_bigquery_dataset_access");
  }
}