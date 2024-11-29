import { TerraformConfig, TerraformResource } from "tfs";
export interface Dataset {
  dataset_id: string;
  project_id: string;
}
export interface Dataset {
  target_types: string[];
  dataset: Dataset;
}
export interface Routine {
  dataset_id: string;
  project_id: string;
  routine_id: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface View {
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
  dataset: Dataset;
  routine: Routine;
  timeouts: Timeouts;
  view: View;
}
export class google_bigquery_dataset_access extends TerraformResource {
  readonly api_updated_member!: boolean;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleBigqueryDatasetAccessArgs) {
    super(config, "resource", args, resourceName, "google_bigquery_dataset_access");
  }
}