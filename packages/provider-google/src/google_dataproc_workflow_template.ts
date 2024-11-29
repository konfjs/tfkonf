import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleDataprocWorkflowTemplateArgsjobsHadoopJobLoggingConfig {
  driver_log_levels?: {
    [key: string]: string;
  };
}
export interface GoogleDataprocWorkflowTemplateArgsjobsHadoopJob {
  archive_uris?: string[];
  args?: string[];
  file_uris?: string[];
  jar_file_uris?: string[];
  main_class?: string;
  main_jar_file_uri?: string;
  properties?: {
    [key: string]: string;
  };
  logging_config: GoogleDataprocWorkflowTemplateArgsjobsHadoopJobLoggingConfig;
}
export interface GoogleDataprocWorkflowTemplateArgsjobsHiveJobQueryList {
  queries: string[];
}
export interface GoogleDataprocWorkflowTemplateArgsjobsHiveJob {
  continue_on_failure?: boolean;
  jar_file_uris?: string[];
  properties?: {
    [key: string]: string;
  };
  query_file_uri?: string;
  script_variables?: {
    [key: string]: string;
  };
  query_list: GoogleDataprocWorkflowTemplateArgsjobsHiveJobQueryList;
}
export interface GoogleDataprocWorkflowTemplateArgsjobsPigJobLoggingConfig {
  driver_log_levels?: {
    [key: string]: string;
  };
}
export interface GoogleDataprocWorkflowTemplateArgsjobsPigJobQueryList {
  queries: string[];
}
export interface GoogleDataprocWorkflowTemplateArgsjobsPigJob {
  continue_on_failure?: boolean;
  jar_file_uris?: string[];
  properties?: {
    [key: string]: string;
  };
  query_file_uri?: string;
  script_variables?: {
    [key: string]: string;
  };
  logging_config: GoogleDataprocWorkflowTemplateArgsjobsPigJobLoggingConfig;
  query_list: GoogleDataprocWorkflowTemplateArgsjobsPigJobQueryList;
}
export interface GoogleDataprocWorkflowTemplateArgsjobsPrestoJobLoggingConfig {
  driver_log_levels?: {
    [key: string]: string;
  };
}
export interface GoogleDataprocWorkflowTemplateArgsjobsPrestoJobQueryList {
  queries: string[];
}
export interface GoogleDataprocWorkflowTemplateArgsjobsPrestoJob {
  client_tags?: string[];
  continue_on_failure?: boolean;
  output_format?: string;
  properties?: {
    [key: string]: string;
  };
  query_file_uri?: string;
  logging_config: GoogleDataprocWorkflowTemplateArgsjobsPrestoJobLoggingConfig;
  query_list: GoogleDataprocWorkflowTemplateArgsjobsPrestoJobQueryList;
}
export interface GoogleDataprocWorkflowTemplateArgsjobsPysparkJobLoggingConfig {
  driver_log_levels?: {
    [key: string]: string;
  };
}
export interface GoogleDataprocWorkflowTemplateArgsjobsPysparkJob {
  archive_uris?: string[];
  args?: string[];
  file_uris?: string[];
  jar_file_uris?: string[];
  main_python_file_uri: string;
  properties?: {
    [key: string]: string;
  };
  python_file_uris?: string[];
  logging_config: GoogleDataprocWorkflowTemplateArgsjobsPysparkJobLoggingConfig;
}
export interface GoogleDataprocWorkflowTemplateArgsjobsscheduling {
  max_failures_per_hour?: number;
  max_failures_total?: number;
}
export interface GoogleDataprocWorkflowTemplateArgsjobsSparkJobLoggingConfig {
  driver_log_levels?: {
    [key: string]: string;
  };
}
export interface GoogleDataprocWorkflowTemplateArgsjobsSparkJob {
  archive_uris?: string[];
  args?: string[];
  file_uris?: string[];
  jar_file_uris?: string[];
  main_class?: string;
  main_jar_file_uri?: string;
  properties?: {
    [key: string]: string;
  };
  logging_config: GoogleDataprocWorkflowTemplateArgsjobsSparkJobLoggingConfig;
}
export interface GoogleDataprocWorkflowTemplateArgsjobsSparkRJobLoggingConfig {
  driver_log_levels?: {
    [key: string]: string;
  };
}
export interface GoogleDataprocWorkflowTemplateArgsjobsSparkRJob {
  archive_uris?: string[];
  args?: string[];
  file_uris?: string[];
  main_r_file_uri: string;
  properties?: {
    [key: string]: string;
  };
  logging_config: GoogleDataprocWorkflowTemplateArgsjobsSparkRJobLoggingConfig;
}
export interface GoogleDataprocWorkflowTemplateArgsjobsSparkSqlJobLoggingConfig {
  driver_log_levels?: {
    [key: string]: string;
  };
}
export interface GoogleDataprocWorkflowTemplateArgsjobsSparkSqlJobQueryList {
  queries: string[];
}
export interface GoogleDataprocWorkflowTemplateArgsjobsSparkSqlJob {
  jar_file_uris?: string[];
  properties?: {
    [key: string]: string;
  };
  query_file_uri?: string;
  script_variables?: {
    [key: string]: string;
  };
  logging_config: GoogleDataprocWorkflowTemplateArgsjobsSparkSqlJobLoggingConfig;
  query_list: GoogleDataprocWorkflowTemplateArgsjobsSparkSqlJobQueryList;
}
export interface GoogleDataprocWorkflowTemplateArgsjobs {
  labels?: {
    [key: string]: string;
  };
  prerequisite_step_ids?: string[];
  step_id: string;
  hadoop_job: GoogleDataprocWorkflowTemplateArgsjobsHadoopJob;
  hive_job: GoogleDataprocWorkflowTemplateArgsjobsHiveJob;
  pig_job: GoogleDataprocWorkflowTemplateArgsjobsPigJob;
  presto_job: GoogleDataprocWorkflowTemplateArgsjobsPrestoJob;
  pyspark_job: GoogleDataprocWorkflowTemplateArgsjobsPysparkJob;
  scheduling: GoogleDataprocWorkflowTemplateArgsjobsscheduling;
  spark_job: GoogleDataprocWorkflowTemplateArgsjobsSparkJob;
  spark_r_job: GoogleDataprocWorkflowTemplateArgsjobsSparkRJob;
  spark_sql_job: GoogleDataprocWorkflowTemplateArgsjobsSparkSqlJob;
}
export interface GoogleDataprocWorkflowTemplateArgsparametersvalidationregex {
  regexes: string[];
}
export interface GoogleDataprocWorkflowTemplateArgsparametersvalidationvalues {
  values: string[];
}
export interface GoogleDataprocWorkflowTemplateArgsparametersvalidation {
  regex: GoogleDataprocWorkflowTemplateArgsparametersvalidationregex;
  values: GoogleDataprocWorkflowTemplateArgsparametersvalidationvalues;
}
export interface GoogleDataprocWorkflowTemplateArgsparameters {
  description?: string;
  fields: string[];
  name: string;
  validation: GoogleDataprocWorkflowTemplateArgsparametersvalidation;
}
export interface GoogleDataprocWorkflowTemplateArgsplacementClusterSelector {
  cluster_labels: {
    [key: string]: string;
  };
}
export interface GoogleDataprocWorkflowTemplateArgsplacementManagedClusterconfigAutoscalingConfig {
  policy?: string;
}
export interface GoogleDataprocWorkflowTemplateArgsplacementManagedClusterconfigEncryptionConfig {
  gce_pd_kms_key_name?: string;
}
export interface GoogleDataprocWorkflowTemplateArgsplacementManagedClusterconfigEndpointConfig {
  enable_http_port_access?: boolean;
}
export interface GoogleDataprocWorkflowTemplateArgsplacementManagedClusterconfigGceClusterConfigNodeGroupAffinity {
  node_group: string;
}
export interface GoogleDataprocWorkflowTemplateArgsplacementManagedClusterconfigGceClusterConfigReservationAffinity {
  consume_reservation_type?: string;
  key?: string;
  values?: string[];
}
export interface GoogleDataprocWorkflowTemplateArgsplacementManagedClusterconfigGceClusterConfigShieldedInstanceConfig {
  enable_integrity_monitoring?: boolean;
  enable_secure_boot?: boolean;
  enable_vtpm?: boolean;
}
export interface GoogleDataprocWorkflowTemplateArgsplacementManagedClusterconfigGceClusterConfig {
  metadata?: {
    [key: string]: string;
  };
  network?: string;
  private_ipv6_google_access?: string;
  service_account?: string;
  service_account_scopes?: string[];
  subnetwork?: string;
  tags?: string[];
  node_group_affinity: GoogleDataprocWorkflowTemplateArgsplacementManagedClusterconfigGceClusterConfigNodeGroupAffinity;
  reservation_affinity: GoogleDataprocWorkflowTemplateArgsplacementManagedClusterconfigGceClusterConfigReservationAffinity;
  shielded_instance_config: GoogleDataprocWorkflowTemplateArgsplacementManagedClusterconfigGceClusterConfigShieldedInstanceConfig;
}
export interface GoogleDataprocWorkflowTemplateArgsplacementManagedClusterconfigInitializationActions {
  executable_file?: string;
  execution_timeout?: string;
}
export interface GoogleDataprocWorkflowTemplateArgsplacementManagedClusterconfigLifecycleConfig {
  auto_delete_time?: string;
  auto_delete_ttl?: string;
  idle_delete_ttl?: string;
}
export interface GoogleDataprocWorkflowTemplateArgsplacementManagedClusterconfigMasterConfigaccelerators {
  accelerator_count?: number;
  accelerator_type?: string;
}
export interface GoogleDataprocWorkflowTemplateArgsplacementManagedClusterconfigMasterConfigDiskConfig {
  boot_disk_size_gb?: number;
  boot_disk_type?: string;
}
export interface GoogleDataprocWorkflowTemplateArgsplacementManagedClusterconfigMasterConfig {
  image?: string;
  machine_type?: string;
  num_instances?: number;
  preemptibility?: string;
  accelerators: GoogleDataprocWorkflowTemplateArgsplacementManagedClusterconfigMasterConfigaccelerators;
  disk_config: GoogleDataprocWorkflowTemplateArgsplacementManagedClusterconfigMasterConfigDiskConfig;
}
export interface GoogleDataprocWorkflowTemplateArgsplacementManagedClusterconfigSecondaryWorkerConfigaccelerators {
  accelerator_count?: number;
  accelerator_type?: string;
}
export interface GoogleDataprocWorkflowTemplateArgsplacementManagedClusterconfigSecondaryWorkerConfigDiskConfig {
  boot_disk_size_gb?: number;
  boot_disk_type?: string;
}
export interface GoogleDataprocWorkflowTemplateArgsplacementManagedClusterconfigSecondaryWorkerConfig {
  image?: string;
  machine_type?: string;
  num_instances?: number;
  preemptibility?: string;
  accelerators: GoogleDataprocWorkflowTemplateArgsplacementManagedClusterconfigSecondaryWorkerConfigaccelerators;
  disk_config: GoogleDataprocWorkflowTemplateArgsplacementManagedClusterconfigSecondaryWorkerConfigDiskConfig;
}
export interface GoogleDataprocWorkflowTemplateArgsplacementManagedClusterconfigSecurityConfigKerberosConfig {
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
export interface GoogleDataprocWorkflowTemplateArgsplacementManagedClusterconfigSecurityConfig {
  kerberos_config: GoogleDataprocWorkflowTemplateArgsplacementManagedClusterconfigSecurityConfigKerberosConfig;
}
export interface GoogleDataprocWorkflowTemplateArgsplacementManagedClusterconfigSoftwareConfig {
  image_version?: string;
  optional_components?: string[];
  properties?: {
    [key: string]: string;
  };
}
export interface GoogleDataprocWorkflowTemplateArgsplacementManagedClusterconfigWorkerConfigaccelerators {
  accelerator_count?: number;
  accelerator_type?: string;
}
export interface GoogleDataprocWorkflowTemplateArgsplacementManagedClusterconfigWorkerConfigDiskConfig {
  boot_disk_size_gb?: number;
  boot_disk_type?: string;
}
export interface GoogleDataprocWorkflowTemplateArgsplacementManagedClusterconfigWorkerConfig {
  image?: string;
  machine_type?: string;
  num_instances?: number;
  preemptibility?: string;
  accelerators: GoogleDataprocWorkflowTemplateArgsplacementManagedClusterconfigWorkerConfigaccelerators;
  disk_config: GoogleDataprocWorkflowTemplateArgsplacementManagedClusterconfigWorkerConfigDiskConfig;
}
export interface GoogleDataprocWorkflowTemplateArgsplacementManagedClusterconfig {
  staging_bucket?: string;
  temp_bucket?: string;
  autoscaling_config: GoogleDataprocWorkflowTemplateArgsplacementManagedClusterconfigAutoscalingConfig;
  encryption_config: GoogleDataprocWorkflowTemplateArgsplacementManagedClusterconfigEncryptionConfig;
  endpoint_config: GoogleDataprocWorkflowTemplateArgsplacementManagedClusterconfigEndpointConfig;
  gce_cluster_config: GoogleDataprocWorkflowTemplateArgsplacementManagedClusterconfigGceClusterConfig;
  initialization_actions: GoogleDataprocWorkflowTemplateArgsplacementManagedClusterconfigInitializationActions;
  lifecycle_config: GoogleDataprocWorkflowTemplateArgsplacementManagedClusterconfigLifecycleConfig;
  master_config: GoogleDataprocWorkflowTemplateArgsplacementManagedClusterconfigMasterConfig;
  secondary_worker_config: GoogleDataprocWorkflowTemplateArgsplacementManagedClusterconfigSecondaryWorkerConfig;
  security_config: GoogleDataprocWorkflowTemplateArgsplacementManagedClusterconfigSecurityConfig;
  software_config: GoogleDataprocWorkflowTemplateArgsplacementManagedClusterconfigSoftwareConfig;
  worker_config: GoogleDataprocWorkflowTemplateArgsplacementManagedClusterconfigWorkerConfig;
}
export interface GoogleDataprocWorkflowTemplateArgsplacementManagedCluster {
  cluster_name: string;
  labels?: {
    [key: string]: string;
  };
  config: GoogleDataprocWorkflowTemplateArgsplacementManagedClusterconfig;
}
export interface GoogleDataprocWorkflowTemplateArgsplacement {
  cluster_selector: GoogleDataprocWorkflowTemplateArgsplacementClusterSelector;
  managed_cluster: GoogleDataprocWorkflowTemplateArgsplacementManagedCluster;
}
export interface GoogleDataprocWorkflowTemplateArgstimeouts {
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
  jobs: GoogleDataprocWorkflowTemplateArgsjobs;
  parameters: GoogleDataprocWorkflowTemplateArgsparameters;
  placement: GoogleDataprocWorkflowTemplateArgsplacement;
  timeouts: GoogleDataprocWorkflowTemplateArgstimeouts;
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