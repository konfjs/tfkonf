import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBigqueryRoutineArgsArguments {
  argument_kind?: string;
  data_type?: string;
  mode?: string;
  name?: string;
}

export interface GoogleBigqueryRoutineArgsRemoteFunctionOptions {
  connection?: string;
  endpoint?: string;
  max_batching_rows?: string;
}

export interface GoogleBigqueryRoutineArgsSparkOptions {
  connection?: string;
  container_image?: string;
  main_class?: string;
  main_file_uri?: string;
  runtime_version?: string;
}

export interface GoogleBigqueryRoutineArgsTimeouts {
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
  arguments: GoogleBigqueryRoutineArgsArguments;
  remote_function_options: GoogleBigqueryRoutineArgsRemoteFunctionOptions;
  spark_options: GoogleBigqueryRoutineArgsSparkOptions;
  timeouts?: GoogleBigqueryRoutineArgsTimeouts;
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
