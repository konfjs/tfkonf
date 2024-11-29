import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleBigqueryDatasetArgsaccessdatasetdataset {
  dataset_id: string;
  project_id: string;
}
export interface GoogleBigqueryDatasetArgsaccessdataset {
  target_types: string[];
  dataset: GoogleBigqueryDatasetArgsaccessdatasetdataset;
}
export interface GoogleBigqueryDatasetArgsaccessroutine {
  dataset_id: string;
  project_id: string;
  routine_id: string;
}
export interface GoogleBigqueryDatasetArgsaccessview {
  dataset_id: string;
  project_id: string;
  table_id: string;
}
export interface GoogleBigqueryDatasetArgsaccess {
  domain?: string;
  group_by_email?: string;
  iam_member?: string;
  role?: string;
  special_group?: string;
  user_by_email?: string;
  dataset: GoogleBigqueryDatasetArgsaccessdataset;
  routine: GoogleBigqueryDatasetArgsaccessroutine;
  view: GoogleBigqueryDatasetArgsaccessview;
}
export interface GoogleBigqueryDatasetArgsDefaultEncryptionConfiguration {
  kms_key_name: string;
}
export interface GoogleBigqueryDatasetArgsExternalDatasetReference {
  connection: string;
  external_source: string;
}
export interface GoogleBigqueryDatasetArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleBigqueryDatasetArgs {
  dataset_id: string;
  default_partition_expiration_ms?: number;
  default_table_expiration_ms?: number;
  delete_contents_on_destroy?: boolean;
  description?: string;
  friendly_name?: string;
  labels?: {
    [key: string]: string;
  };
  location?: string;
  resource_tags?: {
    [key: string]: string;
  };
  access: GoogleBigqueryDatasetArgsaccess;
  default_encryption_configuration: GoogleBigqueryDatasetArgsDefaultEncryptionConfiguration;
  external_dataset_reference: GoogleBigqueryDatasetArgsExternalDatasetReference;
  timeouts: GoogleBigqueryDatasetArgstimeouts;
}
export class google_bigquery_dataset extends TerraformResource {
  readonly creation_time!: number;
  readonly default_collation?: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly etag!: string;
  readonly id?: string;
  readonly is_case_insensitive?: boolean;
  readonly last_modified_time!: number;
  readonly max_time_travel_hours?: string;
  readonly project?: string;
  readonly self_link!: string;
  readonly storage_billing_model?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: GoogleBigqueryDatasetArgs) {
    super(config, "resource", args, resourceName, "google_bigquery_dataset");
  }
}