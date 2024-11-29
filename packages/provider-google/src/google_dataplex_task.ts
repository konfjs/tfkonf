import { TerraformConfig, TerraformResource } from "tfs";
export interface ExecutionSpec {
  args?: {
    [key: string]: string;
  };
  kms_key?: string;
  max_job_execution_lifetime?: string;
  project?: string;
  service_account: string;
}
export interface Batch {
  executors_count?: number;
  max_executors_count?: number;
}
export interface ContainerImage {
  image?: string;
  java_jars?: string[];
  properties?: {
    [key: string]: string;
  };
  python_packages?: string[];
}
export interface VpcNetwork {
  network?: string;
  network_tags?: string[];
  sub_network?: string;
}
export interface InfrastructureSpec {
  batch: Batch;
  container_image: ContainerImage;
  vpc_network: VpcNetwork;
}
export interface Notebook {
  archive_uris?: string[];
  file_uris?: string[];
  notebook: string;
  infrastructure_spec: InfrastructureSpec;
}
export interface Batch {
  executors_count?: number;
  max_executors_count?: number;
}
export interface ContainerImage {
  image?: string;
  java_jars?: string[];
  properties?: {
    [key: string]: string;
  };
  python_packages?: string[];
}
export interface VpcNetwork {
  network?: string;
  network_tags?: string[];
  sub_network?: string;
}
export interface InfrastructureSpec {
  batch: Batch;
  container_image: ContainerImage;
  vpc_network: VpcNetwork;
}
export interface Spark {
  archive_uris?: string[];
  file_uris?: string[];
  main_class?: string;
  main_jar_file_uri?: string;
  python_script_file?: string;
  sql_script?: string;
  sql_script_file?: string;
  infrastructure_spec: InfrastructureSpec;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface TriggerSpec {
  disabled?: boolean;
  max_retries?: number;
  schedule?: string;
  start_time?: string;
  type: string;
}
export interface GoogleDataplexTaskArgs {
  description?: string;
  display_name?: string;
  labels?: {
    [key: string]: string;
  };
  lake?: string;
  location?: string;
  task_id?: string;
  execution_spec: ExecutionSpec;
  notebook: Notebook;
  spark: Spark;
  timeouts: Timeouts;
  trigger_spec: TriggerSpec;
}
export class google_dataplex_task extends TerraformResource {
  readonly create_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly execution_status!: any[];
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly state!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly uid!: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataplexTaskArgs) {
    super(config, "resource", args, resourceName, "google_dataplex_task");
  }
}