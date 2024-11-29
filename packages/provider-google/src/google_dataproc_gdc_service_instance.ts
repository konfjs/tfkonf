import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleDataprocGdcServiceInstanceArgsGdceCluster {
  gdce_cluster: string;
}
export interface GoogleDataprocGdcServiceInstanceArgsSparkServiceInstanceConfig {}
export interface GoogleDataprocGdcServiceInstanceArgsTimeouts {
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
  gdce_cluster: GoogleDataprocGdcServiceInstanceArgsGdceCluster;
  spark_service_instance_config: GoogleDataprocGdcServiceInstanceArgsSparkServiceInstanceConfig;
  timeouts?: GoogleDataprocGdcServiceInstanceArgsTimeouts;
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