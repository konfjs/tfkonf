import { TerraformConfig, TerraformResource } from "tfs";
export interface Accelerators {
  accelerator_type: string;
  state: string;
}
export interface CryptoKeyConfig {
  key_reference: string;
}
export interface EventPublishConfig {
  enabled: boolean;
  topic: string;
}
export interface PrivateServiceConnectConfig {
  network_attachment?: string;
  unreachable_cidr_block?: string;
}
export interface NetworkConfig {
  connection_type?: string;
  ip_allocation?: string;
  network?: string;
  private_service_connect_config: PrivateServiceConnectConfig;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDataFusionInstanceArgs {
  dataproc_service_account?: string;
  description?: string;
  display_name?: string;
  enable_rbac?: boolean;
  enable_stackdriver_logging?: boolean;
  enable_stackdriver_monitoring?: boolean;
  labels?: {
    [key: string]: string;
  };
  name: string;
  private_instance?: boolean;
  type: string;
  accelerators: Accelerators;
  crypto_key_config: CryptoKeyConfig;
  event_publish_config: EventPublishConfig;
  network_config: NetworkConfig;
  timeouts: Timeouts;
}
export class google_data_fusion_instance extends TerraformResource {
  readonly api_endpoint!: string;
  readonly create_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly gcs_bucket!: string;
  readonly id?: string;
  readonly options?: {
    [key: string]: string;
  };
  readonly p4_service_account!: string;
  readonly project?: string;
  readonly region?: string;
  readonly service_endpoint!: string;
  readonly state!: string;
  readonly state_message!: string;
  readonly tenant_project_id!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly update_time!: string;
  readonly version?: string;
  readonly zone?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataFusionInstanceArgs) {
    super(config, "resource", args, resourceName, "google_data_fusion_instance");
  }
}