import { TerraformConfig, TerraformResource } from "tfs";
export interface SparkApplicationEnvironmentConfig {
  default_properties?: {
    [key: string]: string;
  };
  default_version?: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDataprocGdcApplicationEnvironmentArgs {
  annotations?: {
    [key: string]: string;
  };
  application_environment_id?: string;
  display_name?: string;
  labels?: {
    [key: string]: string;
  };
  location: string;
  namespace?: string;
  serviceinstance: string;
  spark_application_environment_config: SparkApplicationEnvironmentConfig;
  timeouts: Timeouts;
}
export class google_dataproc_gdc_application_environment extends TerraformResource {
  readonly create_time!: string;
  readonly effective_annotations!: {
    [key: string]: string;
  };
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly uid!: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataprocGdcApplicationEnvironmentArgs) {
    super(config, "resource", args, resourceName, "google_dataproc_gdc_application_environment");
  }
}