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
export interface View {
  dataset_id: string;
  project_id: string;
  table_id: string;
}
export interface Access {
  domain?: string;
  group_by_email?: string;
  iam_member?: string;
  role?: string;
  special_group?: string;
  user_by_email?: string;
  dataset: Dataset;
  routine: Routine;
  view: View;
}
export interface DefaultEncryptionConfiguration {
  kms_key_name: string;
}
export interface ExternalDatasetReference {
  connection: string;
  external_source: string;
}
export interface Timeouts {
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
  access: Access;
  default_encryption_configuration: DefaultEncryptionConfiguration;
  external_dataset_reference: ExternalDatasetReference;
  timeouts: Timeouts;
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