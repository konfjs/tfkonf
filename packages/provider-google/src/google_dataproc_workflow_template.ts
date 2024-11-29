import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleDataprocWorkflowTemplateArgsJobsHadoopJobLoggingConfig {
  driver_log_levels?: {
    [key: string]: string;
  };
}
export interface GoogleDataprocWorkflowTemplateArgsJobsHadoopJob {
  archive_uris?: string[];
  args?: string[];
  file_uris?: string[];
  jar_file_uris?: string[];
  main_class?: string;
  main_jar_file_uri?: string;
  properties?: {
    [key: string]: string;
  };
  logging_config: GoogleDataprocWorkflowTemplateArgsJobsHadoopJobLoggingConfig;
}
export interface GoogleDataprocWorkflowTemplateArgsJobsHiveJobQueryList {
  queries: string[];
}
export interface GoogleDataprocWorkflowTemplateArgsJobsHiveJob {
  continue_on_failure?: boolean;
  jar_file_uris?: string[];
  properties?: {
    [key: string]: string;
  };
  query_file_uri?: string;
  script_variables?: {
    [key: string]: string;
  };
  query_list: GoogleDataprocWorkflowTemplateArgsJobsHiveJobQueryList;
}
export interface GoogleDataprocWorkflowTemplateArgsJobsPigJobLoggingConfig {
  driver_log_levels?: {
    [key: string]: string;
  };
}
export interface GoogleDataprocWorkflowTemplateArgsJobsPigJobQueryList {
  queries: string[];
}
export interface GoogleDataprocWorkflowTemplateArgsJobsPigJob {
  continue_on_failure?: boolean;
  jar_file_uris?: string[];
  properties?: {
    [key: string]: string;
  };
  query_file_uri?: string;
  script_variables?: {
    [key: string]: string;
  };
  logging_config: GoogleDataprocWorkflowTemplateArgsJobsPigJobLoggingConfig;
  query_list: GoogleDataprocWorkflowTemplateArgsJobsPigJobQueryList;
}
export interface GoogleDataprocWorkflowTemplateArgsJobsPrestoJobLoggingConfig {
  driver_log_levels?: {
    [key: string]: string;
  };
}
export interface GoogleDataprocWorkflowTemplateArgsJobsPrestoJobQueryList {
  queries: string[];
}
export interface GoogleDataprocWorkflowTemplateArgsJobsPrestoJob {
  client_tags?: string[];
  continue_on_failure?: boolean;
  output_format?: string;
  properties?: {
    [key: string]: string;
  };
  query_file_uri?: string;
  logging_config: GoogleDataprocWorkflowTemplateArgsJobsPrestoJobLoggingConfig;
  query_list: GoogleDataprocWorkflowTemplateArgsJobsPrestoJobQueryList;
}
export interface GoogleDataprocWorkflowTemplateArgsJobsPysparkJobLoggingConfig {
  driver_log_levels?: {
    [key: string]: string;
  };
}
export interface GoogleDataprocWorkflowTemplateArgsJobsPysparkJob {
  archive_uris?: string[];
  args?: string[];
  file_uris?: string[];
  jar_file_uris?: string[];
  main_python_file_uri: string;
  properties?: {
    [key: string]: string;
  };
  python_file_uris?: string[];
  logging_config: GoogleDataprocWorkflowTemplateArgsJobsPysparkJobLoggingConfig;
}
export interface GoogleDataprocWorkflowTemplateArgsJobsScheduling {
  max_failures_per_hour?: number;
  max_failures_total?: number;
}
export interface GoogleDataprocWorkflowTemplateArgsJobsSparkJobLoggingConfig {
  driver_log_levels?: {
    [key: string]: string;
  };
}
export interface GoogleDataprocWorkflowTemplateArgsJobsSparkJob {
  archive_uris?: string[];
  args?: string[];
  file_uris?: string[];
  jar_file_uris?: string[];
  main_class?: string;
  main_jar_file_uri?: string;
  properties?: {
    [key: string]: string;
  };
  logging_config: GoogleDataprocWorkflowTemplateArgsJobsSparkJobLoggingConfig;
}
export interface GoogleDataprocWorkflowTemplateArgsJobsSparkRJobLoggingConfig {
  driver_log_levels?: {
    [key: string]: string;
  };
}
export interface GoogleDataprocWorkflowTemplateArgsJobsSparkRJob {
  archive_uris?: string[];
  args?: string[];
  file_uris?: string[];
  main_r_file_uri: string;
  properties?: {
    [key: string]: string;
  };
  logging_config: GoogleDataprocWorkflowTemplateArgsJobsSparkRJobLoggingConfig;
}
export interface GoogleDataprocWorkflowTemplateArgsJobsSparkSqlJobLoggingConfig {
  driver_log_levels?: {
    [key: string]: string;
  };
}
export interface GoogleDataprocWorkflowTemplateArgsJobsSparkSqlJobQueryList {
  queries: string[];
}
export interface GoogleDataprocWorkflowTemplateArgsJobsSparkSqlJob {
  jar_file_uris?: string[];
  properties?: {
    [key: string]: string;
  };
  query_file_uri?: string;
  script_variables?: {
    [key: string]: string;
  };
  logging_config: GoogleDataprocWorkflowTemplateArgsJobsSparkSqlJobLoggingConfig;
  query_list: GoogleDataprocWorkflowTemplateArgsJobsSparkSqlJobQueryList;
}
export interface GoogleDataprocWorkflowTemplateArgsJobs {
  labels?: {
    [key: string]: string;
  };
  prerequisite_step_ids?: string[];
  step_id: string;
  hadoop_job: GoogleDataprocWorkflowTemplateArgsJobsHadoopJob;
  hive_job: GoogleDataprocWorkflowTemplateArgsJobsHiveJob;
  pig_job: GoogleDataprocWorkflowTemplateArgsJobsPigJob;
  presto_job: GoogleDataprocWorkflowTemplateArgsJobsPrestoJob;
  pyspark_job: GoogleDataprocWorkflowTemplateArgsJobsPysparkJob;
  scheduling: GoogleDataprocWorkflowTemplateArgsJobsScheduling;
  spark_job: GoogleDataprocWorkflowTemplateArgsJobsSparkJob;
  spark_r_job: GoogleDataprocWorkflowTemplateArgsJobsSparkRJob;
  spark_sql_job: GoogleDataprocWorkflowTemplateArgsJobsSparkSqlJob;
}
export interface GoogleDataprocWorkflowTemplateArgsParametersValidationRegex {
  regexes: string[];
}
export interface GoogleDataprocWorkflowTemplateArgsParametersValidationValues {
  values: string[];
}
export interface GoogleDataprocWorkflowTemplateArgsParametersValidation {
  regex: GoogleDataprocWorkflowTemplateArgsParametersValidationRegex;
  values: GoogleDataprocWorkflowTemplateArgsParametersValidationValues;
}
export interface GoogleDataprocWorkflowTemplateArgsParameters {
  description?: string;
  fields: string[];
  name: string;
  validation: GoogleDataprocWorkflowTemplateArgsParametersValidation;
}
export interface GoogleDataprocWorkflowTemplateArgsPlacementClusterSelector {
  cluster_labels: {
    [key: string]: string;
  };
}
export interface GoogleDataprocWorkflowTemplateArgsPlacementManagedClusterConfigAutoscalingConfig {
  policy?: string;
}
export interface GoogleDataprocWorkflowTemplateArgsPlacementManagedClusterConfigEncryptionConfig {
  gce_pd_kms_key_name?: string;
}
export interface GoogleDataprocWorkflowTemplateArgsPlacementManagedClusterConfigEndpointConfig {
  enable_http_port_access?: boolean;
}
export interface GoogleDataprocWorkflowTemplateArgsPlacementManagedClusterConfigGceClusterConfigNodeGroupAffinity {
  node_group: string;
}
export interface GoogleDataprocWorkflowTemplateArgsPlacementManagedClusterConfigGceClusterConfigReservationAffinity {
  consume_reservation_type?: string;
  key?: string;
  values?: string[];
}
export interface GoogleDataprocWorkflowTemplateArgsPlacementManagedClusterConfigGceClusterConfigShieldedInstanceConfig {
  enable_integrity_monitoring?: boolean;
  enable_secure_boot?: boolean;
  enable_vtpm?: boolean;
}
export interface GoogleDataprocWorkflowTemplateArgsPlacementManagedClusterConfigGceClusterConfig {
  metadata?: {
    [key: string]: string;
  };
  network?: string;
  private_ipv6_google_access?: string;
  service_account?: string;
  service_account_scopes?: string[];
  subnetwork?: string;
  tags?: string[];
  node_group_affinity: GoogleDataprocWorkflowTemplateArgsPlacementManagedClusterConfigGceClusterConfigNodeGroupAffinity;
  reservation_affinity: GoogleDataprocWorkflowTemplateArgsPlacementManagedClusterConfigGceClusterConfigReservationAffinity;
  shielded_instance_config: GoogleDataprocWorkflowTemplateArgsPlacementManagedClusterConfigGceClusterConfigShieldedInstanceConfig;
}
export interface GoogleDataprocWorkflowTemplateArgsPlacementManagedClusterConfigInitializationActions {
  executable_file?: string;
  execution_timeout?: string;
}
export interface GoogleDataprocWorkflowTemplateArgsPlacementManagedClusterConfigLifecycleConfig {
  auto_delete_time?: string;
  auto_delete_ttl?: string;
  idle_delete_ttl?: string;
}
export interface GoogleDataprocWorkflowTemplateArgsPlacementManagedClusterConfigMasterConfigAccelerators {
  accelerator_count?: number;
  accelerator_type?: string;
}
export interface GoogleDataprocWorkflowTemplateArgsPlacementManagedClusterConfigMasterConfigDiskConfig {
  boot_disk_size_gb?: number;
  boot_disk_type?: string;
}
export interface GoogleDataprocWorkflowTemplateArgsPlacementManagedClusterConfigMasterConfig {
  image?: string;
  machine_type?: string;
  num_instances?: number;
  preemptibility?: string;
  accelerators: GoogleDataprocWorkflowTemplateArgsPlacementManagedClusterConfigMasterConfigAccelerators;
  disk_config: GoogleDataprocWorkflowTemplateArgsPlacementManagedClusterConfigMasterConfigDiskConfig;
}
export interface GoogleDataprocWorkflowTemplateArgsPlacementManagedClusterConfigSecondaryWorkerConfigAccelerators {
  accelerator_count?: number;
  accelerator_type?: string;
}
export interface GoogleDataprocWorkflowTemplateArgsPlacementManagedClusterConfigSecondaryWorkerConfigDiskConfig {
  boot_disk_size_gb?: number;
  boot_disk_type?: string;
}
export interface GoogleDataprocWorkflowTemplateArgsPlacementManagedClusterConfigSecondaryWorkerConfig {
  image?: string;
  machine_type?: string;
  num_instances?: number;
  preemptibility?: string;
  accelerators: GoogleDataprocWorkflowTemplateArgsPlacementManagedClusterConfigSecondaryWorkerConfigAccelerators;
  disk_config: GoogleDataprocWorkflowTemplateArgsPlacementManagedClusterConfigSecondaryWorkerConfigDiskConfig;
}
export interface GoogleDataprocWorkflowTemplateArgsPlacementManagedClusterConfigSecurityConfigKerberosConfig {
  cross_realm_trust_admin_server?: string;
  cross_realm_trust_kdc?: string;
  cross_realm_trust_realm?: string;
  cross_realm_trust_shared_password?: string;
  enable_kerberos?: boolean;
  kdc_db_key?: string;
  key_password?: string;
  keystore?: string;
  keystore_password?: string;
  kms_key?: string;
  realm?: string;
  root_principal_password?: string;
  tgt_lifetime_hours?: number;
  truststore?: string;
  truststore_password?: string;
}
export interface GoogleDataprocWorkflowTemplateArgsPlacementManagedClusterConfigSecurityConfig {
  kerberos_config: GoogleDataprocWorkflowTemplateArgsPlacementManagedClusterConfigSecurityConfigKerberosConfig;
}
export interface GoogleDataprocWorkflowTemplateArgsPlacementManagedClusterConfigSoftwareConfig {
  image_version?: string;
  optional_components?: string[];
  properties?: {
    [key: string]: string;
  };
}
export interface GoogleDataprocWorkflowTemplateArgsPlacementManagedClusterConfigWorkerConfigAccelerators {
  accelerator_count?: number;
  accelerator_type?: string;
}
export interface GoogleDataprocWorkflowTemplateArgsPlacementManagedClusterConfigWorkerConfigDiskConfig {
  boot_disk_size_gb?: number;
  boot_disk_type?: string;
}
export interface GoogleDataprocWorkflowTemplateArgsPlacementManagedClusterConfigWorkerConfig {
  image?: string;
  machine_type?: string;
  num_instances?: number;
  preemptibility?: string;
  accelerators: GoogleDataprocWorkflowTemplateArgsPlacementManagedClusterConfigWorkerConfigAccelerators;
  disk_config: GoogleDataprocWorkflowTemplateArgsPlacementManagedClusterConfigWorkerConfigDiskConfig;
}
export interface GoogleDataprocWorkflowTemplateArgsPlacementManagedClusterConfig {
  staging_bucket?: string;
  temp_bucket?: string;
  autoscaling_config: GoogleDataprocWorkflowTemplateArgsPlacementManagedClusterConfigAutoscalingConfig;
  encryption_config: GoogleDataprocWorkflowTemplateArgsPlacementManagedClusterConfigEncryptionConfig;
  endpoint_config: GoogleDataprocWorkflowTemplateArgsPlacementManagedClusterConfigEndpointConfig;
  gce_cluster_config: GoogleDataprocWorkflowTemplateArgsPlacementManagedClusterConfigGceClusterConfig;
  initialization_actions: GoogleDataprocWorkflowTemplateArgsPlacementManagedClusterConfigInitializationActions;
  lifecycle_config: GoogleDataprocWorkflowTemplateArgsPlacementManagedClusterConfigLifecycleConfig;
  master_config: GoogleDataprocWorkflowTemplateArgsPlacementManagedClusterConfigMasterConfig;
  secondary_worker_config: GoogleDataprocWorkflowTemplateArgsPlacementManagedClusterConfigSecondaryWorkerConfig;
  security_config: GoogleDataprocWorkflowTemplateArgsPlacementManagedClusterConfigSecurityConfig;
  software_config: GoogleDataprocWorkflowTemplateArgsPlacementManagedClusterConfigSoftwareConfig;
  worker_config: GoogleDataprocWorkflowTemplateArgsPlacementManagedClusterConfigWorkerConfig;
}
export interface GoogleDataprocWorkflowTemplateArgsPlacementManagedCluster {
  cluster_name: string;
  labels?: {
    [key: string]: string;
  };
  config: GoogleDataprocWorkflowTemplateArgsPlacementManagedClusterConfig;
}
export interface GoogleDataprocWorkflowTemplateArgsPlacement {
  cluster_selector: GoogleDataprocWorkflowTemplateArgsPlacementClusterSelector;
  managed_cluster: GoogleDataprocWorkflowTemplateArgsPlacementManagedCluster;
}
export interface GoogleDataprocWorkflowTemplateArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDataprocWorkflowTemplateArgs {
  dag_timeout?: string;
  labels?: {
    [key: string]: string;
  };
  location: string;
  name: string;
  jobs: GoogleDataprocWorkflowTemplateArgsJobs;
  parameters: GoogleDataprocWorkflowTemplateArgsParameters;
  placement: GoogleDataprocWorkflowTemplateArgsPlacement;
  timeouts?: GoogleDataprocWorkflowTemplateArgsTimeouts;
}
export class google_dataproc_workflow_template extends TerraformResource {
  readonly create_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly project?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly update_time!: string;
  readonly version?: number;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataprocWorkflowTemplateArgs) {
    super(config, "resource", args, resourceName, "google_dataproc_workflow_template");
  }
}