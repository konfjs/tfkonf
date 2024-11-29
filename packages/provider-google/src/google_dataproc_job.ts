import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleDataprocJobArgsHadoopConfigLoggingConfig {
  driver_log_levels: {
    [key: string]: string;
  };
}
export interface GoogleDataprocJobArgsHadoopConfig {
  archive_uris?: string[];
  args?: string[];
  file_uris?: string[];
  jar_file_uris?: string[];
  main_class?: string;
  main_jar_file_uri?: string;
  properties?: {
    [key: string]: string;
  };
  logging_config: GoogleDataprocJobArgsHadoopConfigLoggingConfig;
}
export interface GoogleDataprocJobArgsHiveConfig {
  continue_on_failure?: boolean;
  jar_file_uris?: string[];
  properties?: {
    [key: string]: string;
  };
  query_file_uri?: string;
  query_list?: string[];
  script_variables?: {
    [key: string]: string;
  };
}
export interface GoogleDataprocJobArgsPigConfigLoggingConfig {
  driver_log_levels: {
    [key: string]: string;
  };
}
export interface GoogleDataprocJobArgsPigConfig {
  continue_on_failure?: boolean;
  jar_file_uris?: string[];
  properties?: {
    [key: string]: string;
  };
  query_file_uri?: string;
  query_list?: string[];
  script_variables?: {
    [key: string]: string;
  };
  logging_config: GoogleDataprocJobArgsPigConfigLoggingConfig;
}
export interface GoogleDataprocJobArgsplacement {
  cluster_name: string;
}
export interface GoogleDataprocJobArgsPrestoConfigLoggingConfig {
  driver_log_levels: {
    [key: string]: string;
  };
}
export interface GoogleDataprocJobArgsPrestoConfig {
  client_tags?: string[];
  continue_on_failure?: boolean;
  output_format?: string;
  properties?: {
    [key: string]: string;
  };
  query_file_uri?: string;
  query_list?: string[];
  logging_config: GoogleDataprocJobArgsPrestoConfigLoggingConfig;
}
export interface GoogleDataprocJobArgsPysparkConfigLoggingConfig {
  driver_log_levels: {
    [key: string]: string;
  };
}
export interface GoogleDataprocJobArgsPysparkConfig {
  archive_uris?: string[];
  args?: string[];
  file_uris?: string[];
  jar_file_uris?: string[];
  main_python_file_uri: string;
  properties?: {
    [key: string]: string;
  };
  python_file_uris?: string[];
  logging_config: GoogleDataprocJobArgsPysparkConfigLoggingConfig;
}
export interface GoogleDataprocJobArgsreference {}
export interface GoogleDataprocJobArgsscheduling {
  max_failures_per_hour: number;
  max_failures_total: number;
}
export interface GoogleDataprocJobArgsSparkConfigLoggingConfig {
  driver_log_levels: {
    [key: string]: string;
  };
}
export interface GoogleDataprocJobArgsSparkConfig {
  archive_uris?: string[];
  args?: string[];
  file_uris?: string[];
  jar_file_uris?: string[];
  main_class?: string;
  main_jar_file_uri?: string;
  properties?: {
    [key: string]: string;
  };
  logging_config: GoogleDataprocJobArgsSparkConfigLoggingConfig;
}
export interface GoogleDataprocJobArgsSparksqlConfigLoggingConfig {
  driver_log_levels: {
    [key: string]: string;
  };
}
export interface GoogleDataprocJobArgsSparksqlConfig {
  jar_file_uris?: string[];
  properties?: {
    [key: string]: string;
  };
  query_file_uri?: string;
  query_list?: string[];
  script_variables?: {
    [key: string]: string;
  };
  logging_config: GoogleDataprocJobArgsSparksqlConfigLoggingConfig;
}
export interface GoogleDataprocJobArgstimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleDataprocJobArgs {
  force_delete?: boolean;
  labels?: {
    [key: string]: string;
  };
  region?: string;
  hadoop_config: GoogleDataprocJobArgsHadoopConfig;
  hive_config: GoogleDataprocJobArgsHiveConfig;
  pig_config: GoogleDataprocJobArgsPigConfig;
  placement: GoogleDataprocJobArgsplacement;
  presto_config: GoogleDataprocJobArgsPrestoConfig;
  pyspark_config: GoogleDataprocJobArgsPysparkConfig;
  reference: GoogleDataprocJobArgsreference;
  scheduling: GoogleDataprocJobArgsscheduling;
  spark_config: GoogleDataprocJobArgsSparkConfig;
  sparksql_config: GoogleDataprocJobArgsSparksqlConfig;
  timeouts: GoogleDataprocJobArgstimeouts;
}
export class google_dataproc_job extends TerraformResource {
  readonly driver_controls_files_uri!: string;
  readonly driver_output_resource_uri!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly project?: string;
  readonly status!: any[];
  readonly terraform_labels!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataprocJobArgs) {
    super(config, "resource", args, resourceName, "google_dataproc_job");
  }
}