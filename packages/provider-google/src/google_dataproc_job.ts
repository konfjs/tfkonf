import { TerraformConfig, TerraformResource } from "tfs";
export interface LoggingConfig {
  driver_log_levels: {
    [key: string]: string;
  };
}
export interface HadoopConfig {
  archive_uris?: string[];
  args?: string[];
  file_uris?: string[];
  jar_file_uris?: string[];
  main_class?: string;
  main_jar_file_uri?: string;
  properties?: {
    [key: string]: string;
  };
  logging_config: LoggingConfig;
}
export interface HiveConfig {
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
export interface LoggingConfig {
  driver_log_levels: {
    [key: string]: string;
  };
}
export interface PigConfig {
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
  logging_config: LoggingConfig;
}
export interface Placement {
  cluster_name: string;
}
export interface LoggingConfig {
  driver_log_levels: {
    [key: string]: string;
  };
}
export interface PrestoConfig {
  client_tags?: string[];
  continue_on_failure?: boolean;
  output_format?: string;
  properties?: {
    [key: string]: string;
  };
  query_file_uri?: string;
  query_list?: string[];
  logging_config: LoggingConfig;
}
export interface LoggingConfig {
  driver_log_levels: {
    [key: string]: string;
  };
}
export interface PysparkConfig {
  archive_uris?: string[];
  args?: string[];
  file_uris?: string[];
  jar_file_uris?: string[];
  main_python_file_uri: string;
  properties?: {
    [key: string]: string;
  };
  python_file_uris?: string[];
  logging_config: LoggingConfig;
}
export interface Reference {}
export interface Scheduling {
  max_failures_per_hour: number;
  max_failures_total: number;
}
export interface LoggingConfig {
  driver_log_levels: {
    [key: string]: string;
  };
}
export interface SparkConfig {
  archive_uris?: string[];
  args?: string[];
  file_uris?: string[];
  jar_file_uris?: string[];
  main_class?: string;
  main_jar_file_uri?: string;
  properties?: {
    [key: string]: string;
  };
  logging_config: LoggingConfig;
}
export interface LoggingConfig {
  driver_log_levels: {
    [key: string]: string;
  };
}
export interface SparksqlConfig {
  jar_file_uris?: string[];
  properties?: {
    [key: string]: string;
  };
  query_file_uri?: string;
  query_list?: string[];
  script_variables?: {
    [key: string]: string;
  };
  logging_config: LoggingConfig;
}
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface GoogleDataprocJobArgs {
  force_delete?: boolean;
  labels?: {
    [key: string]: string;
  };
  region?: string;
  hadoop_config: HadoopConfig;
  hive_config: HiveConfig;
  pig_config: PigConfig;
  placement: Placement;
  presto_config: PrestoConfig;
  pyspark_config: PysparkConfig;
  reference: Reference;
  scheduling: Scheduling;
  spark_config: SparkConfig;
  sparksql_config: SparksqlConfig;
  timeouts: Timeouts;
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