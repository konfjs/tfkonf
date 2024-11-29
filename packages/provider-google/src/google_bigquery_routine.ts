import { TerraformConfig, TerraformResource } from "tfs";
export interface Arguments {
  argument_kind?: string;
  data_type?: string;
  mode?: string;
  name?: string;
}
export interface RemoteFunctionOptions {
  connection?: string;
  endpoint?: string;
  max_batching_rows?: string;
}
export interface SparkOptions {
  connection?: string;
  container_image?: string;
  main_class?: string;
  main_file_uri?: string;
  runtime_version?: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleBigqueryRoutineArgs {
  data_governance_type?: string;
  dataset_id: string;
  definition_body: string;
  description?: string;
  determinism_level?: string;
  imported_libraries?: string[];
  language?: string;
  return_table_type?: string;
  return_type?: string;
  routine_id: string;
  routine_type: string;
  arguments: Arguments;
  remote_function_options: RemoteFunctionOptions;
  spark_options: SparkOptions;
  timeouts: Timeouts;
}
export class google_bigquery_routine extends TerraformResource {
  readonly creation_time!: number;
  readonly id?: string;
  readonly last_modified_time!: number;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleBigqueryRoutineArgs) {
    super(config, "resource", args, resourceName, "google_bigquery_routine");
  }
}