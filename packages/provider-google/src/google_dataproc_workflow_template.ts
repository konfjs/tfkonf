import { TerraformConfig, TerraformResource } from "tfs";
export interface LoggingConfig {
  driver_log_levels?: {
    [key: string]: string;
  };
}
export interface HadoopJob {
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
export interface QueryList {
  queries: string[];
}
export interface HiveJob {
  continue_on_failure?: boolean;
  jar_file_uris?: string[];
  properties?: {
    [key: string]: string;
  };
  query_file_uri?: string;
  script_variables?: {
    [key: string]: string;
  };
  query_list: QueryList;
}
export interface LoggingConfig {
  driver_log_levels?: {
    [key: string]: string;
  };
}
export interface QueryList {
  queries: string[];
}
export interface PigJob {
  continue_on_failure?: boolean;
  jar_file_uris?: string[];
  properties?: {
    [key: string]: string;
  };
  query_file_uri?: string;
  script_variables?: {
    [key: string]: string;
  };
  logging_config: LoggingConfig;
  query_list: QueryList;
}
export interface LoggingConfig {
  driver_log_levels?: {
    [key: string]: string;
  };
}
export interface QueryList {
  queries: string[];
}
export interface PrestoJob {
  client_tags?: string[];
  continue_on_failure?: boolean;
  output_format?: string;
  properties?: {
    [key: string]: string;
  };
  query_file_uri?: string;
  logging_config: LoggingConfig;
  query_list: QueryList;
}
export interface LoggingConfig {
  driver_log_levels?: {
    [key: string]: string;
  };
}
export interface PysparkJob {
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
export interface Scheduling {
  max_failures_per_hour?: number;
  max_failures_total?: number;
}
export interface LoggingConfig {
  driver_log_levels?: {
    [key: string]: string;
  };
}
export interface SparkJob {
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
  driver_log_levels?: {
    [key: string]: string;
  };
}
export interface SparkRJob {
  archive_uris?: string[];
  args?: string[];
  file_uris?: string[];
  main_r_file_uri: string;
  properties?: {
    [key: string]: string;
  };
  logging_config: LoggingConfig;
}
export interface LoggingConfig {
  driver_log_levels?: {
    [key: string]: string;
  };
}
export interface QueryList {
  queries: string[];
}
export interface SparkSqlJob {
  jar_file_uris?: string[];
  properties?: {
    [key: string]: string;
  };
  query_file_uri?: string;
  script_variables?: {
    [key: string]: string;
  };
  logging_config: LoggingConfig;
  query_list: QueryList;
}
export interface Jobs {
  labels?: {
    [key: string]: string;
  };
  prerequisite_step_ids?: string[];
  step_id: string;
  hadoop_job: HadoopJob;
  hive_job: HiveJob;
  pig_job: PigJob;
  presto_job: PrestoJob;
  pyspark_job: PysparkJob;
  scheduling: Scheduling;
  spark_job: SparkJob;
  spark_r_job: SparkRJob;
  spark_sql_job: SparkSqlJob;
}
export interface Regex {
  regexes: string[];
}
export interface Values {
  values: string[];
}
export interface Validation {
  regex: Regex;
  values: Values;
}
export interface Parameters {
  description?: string;
  fields: string[];
  name: string;
  validation: Validation;
}
export interface ClusterSelector {
  cluster_labels: {
    [key: string]: string;
  };
}
export interface AutoscalingConfig {
  policy?: string;
}
export interface EncryptionConfig {
  gce_pd_kms_key_name?: string;
}
export interface EndpointConfig {
  enable_http_port_access?: boolean;
}
export interface NodeGroupAffinity {
  node_group: string;
}
export interface ReservationAffinity {
  consume_reservation_type?: string;
  key?: string;
  values?: string[];
}
export interface ShieldedInstanceConfig {
  enable_integrity_monitoring?: boolean;
  enable_secure_boot?: boolean;
  enable_vtpm?: boolean;
}
export interface GceClusterConfig {
  metadata?: {
    [key: string]: string;
  };
  network?: string;
  private_ipv6_google_access?: string;
  service_account?: string;
  service_account_scopes?: string[];
  subnetwork?: string;
  tags?: string[];
  node_group_affinity: NodeGroupAffinity;
  reservation_affinity: ReservationAffinity;
  shielded_instance_config: ShieldedInstanceConfig;
}
export interface InitializationActions {
  executable_file?: string;
  execution_timeout?: string;
}
export interface LifecycleConfig {
  auto_delete_time?: string;
  auto_delete_ttl?: string;
  idle_delete_ttl?: string;
}
export interface Accelerators {
  accelerator_count?: number;
  accelerator_type?: string;
}
export interface DiskConfig {
  boot_disk_size_gb?: number;
  boot_disk_type?: string;
}
export interface MasterConfig {
  image?: string;
  machine_type?: string;
  num_instances?: number;
  preemptibility?: string;
  accelerators: Accelerators;
  disk_config: DiskConfig;
}
export interface Accelerators {
  accelerator_count?: number;
  accelerator_type?: string;
}
export interface DiskConfig {
  boot_disk_size_gb?: number;
  boot_disk_type?: string;
}
export interface SecondaryWorkerConfig {
  image?: string;
  machine_type?: string;
  num_instances?: number;
  preemptibility?: string;
  accelerators: Accelerators;
  disk_config: DiskConfig;
}
export interface KerberosConfig {
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
export interface SecurityConfig {
  kerberos_config: KerberosConfig;
}
export interface SoftwareConfig {
  image_version?: string;
  optional_components?: string[];
  properties?: {
    [key: string]: string;
  };
}
export interface Accelerators {
  accelerator_count?: number;
  accelerator_type?: string;
}
export interface DiskConfig {
  boot_disk_size_gb?: number;
  boot_disk_type?: string;
}
export interface WorkerConfig {
  image?: string;
  machine_type?: string;
  num_instances?: number;
  preemptibility?: string;
  accelerators: Accelerators;
  disk_config: DiskConfig;
}
export interface Config {
  staging_bucket?: string;
  temp_bucket?: string;
  autoscaling_config: AutoscalingConfig;
  encryption_config: EncryptionConfig;
  endpoint_config: EndpointConfig;
  gce_cluster_config: GceClusterConfig;
  initialization_actions: InitializationActions;
  lifecycle_config: LifecycleConfig;
  master_config: MasterConfig;
  secondary_worker_config: SecondaryWorkerConfig;
  security_config: SecurityConfig;
  software_config: SoftwareConfig;
  worker_config: WorkerConfig;
}
export interface ManagedCluster {
  cluster_name: string;
  labels?: {
    [key: string]: string;
  };
  config: Config;
}
export interface Placement {
  cluster_selector: ClusterSelector;
  managed_cluster: ManagedCluster;
}
export interface Timeouts {
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
  jobs: Jobs;
  parameters: Parameters;
  placement: Placement;
  timeouts: Timeouts;
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