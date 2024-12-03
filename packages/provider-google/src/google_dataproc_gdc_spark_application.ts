import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleDataprocGdcSparkApplicationArgsPysparkApplicationConfig {
  archive_uris?: string[];
  args?: string[];
  file_uris?: string[];
  jar_file_uris?: string[];
  main_python_file_uri: string;
  python_file_uris?: string[];
}
export interface GoogleDataprocGdcSparkApplicationArgsSparkApplicationConfig {
  archive_uris?: string[];
  args?: string[];
  file_uris?: string[];
  jar_file_uris?: string[];
  main_class?: string;
  main_jar_file_uri?: string;
}
export interface GoogleDataprocGdcSparkApplicationArgsSparkRApplicationConfig {
  archive_uris?: string[];
  args?: string[];
  file_uris?: string[];
  main_r_file_uri: string;
}
export interface GoogleDataprocGdcSparkApplicationArgsSparkSqlApplicationConfigQueryList {
  queries: string[];
}
export interface GoogleDataprocGdcSparkApplicationArgsSparkSqlApplicationConfig {
  jar_file_uris?: string[];
  query_file_uri?: string;
  script_variables?: {
    [key: string]: string;
  };
  query_list: GoogleDataprocGdcSparkApplicationArgsSparkSqlApplicationConfigQueryList;
}
export interface GoogleDataprocGdcSparkApplicationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDataprocGdcSparkApplicationArgs {
  annotations?: {
    [key: string]: string;
  };
  application_environment?: string;
  dependency_images?: string[];
  display_name?: string;
  labels?: {
    [key: string]: string;
  };
  location: string;
  namespace?: string;
  properties?: {
    [key: string]: string;
  };
  serviceinstance: string;
  spark_application_id: string;
  version?: string;
  pyspark_application_config: GoogleDataprocGdcSparkApplicationArgsPysparkApplicationConfig;
  spark_application_config: GoogleDataprocGdcSparkApplicationArgsSparkApplicationConfig;
  spark_r_application_config: GoogleDataprocGdcSparkApplicationArgsSparkRApplicationConfig;
  spark_sql_application_config: GoogleDataprocGdcSparkApplicationArgsSparkSqlApplicationConfig;
  timeouts?: GoogleDataprocGdcSparkApplicationArgsTimeouts;
}
export class google_dataproc_gdc_spark_application extends TerraformResource {
  readonly create_time!: string;
  readonly effective_annotations!: {
    [key: string]: string;
  };
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly monitoring_endpoint!: string;
  readonly name!: string;
  readonly output_uri!: string;
  readonly project?: string;
  readonly reconciling!: boolean;
  readonly state!: string;
  readonly state_message!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly uid!: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataprocGdcSparkApplicationArgs) {
    super(config, "resource", args, resourceName, "google_dataproc_gdc_spark_application");
  }
}