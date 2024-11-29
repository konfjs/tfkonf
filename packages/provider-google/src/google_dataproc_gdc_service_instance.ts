import { TerraformConfig, TerraformResource } from "tfs";
export interface GdceCluster {
  gdce_cluster: string;
}
export interface SparkServiceInstanceConfig {}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDataprocGdcServiceInstanceArgs {
  display_name?: string;
  labels?: {
    [key: string]: string;
  };
  location: string;
  service_account?: string;
  service_instance_id: string;
  gdce_cluster: GdceCluster;
  spark_service_instance_config: SparkServiceInstanceConfig;
  timeouts: Timeouts;
}
export class google_dataproc_gdc_service_instance extends TerraformResource {
  readonly create_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly effective_service_account!: string;
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly reconciling!: boolean;
  readonly requested_state!: string;
  readonly state!: string;
  readonly state_message!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly uid!: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataprocGdcServiceInstanceArgs) {
    super(config, "resource", args, resourceName, "google_dataproc_gdc_service_instance");
  }
}