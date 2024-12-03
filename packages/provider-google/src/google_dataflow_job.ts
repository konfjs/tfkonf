import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleDataflowJobArgsTimeouts {
  update?: string;
}
export interface GoogleDataflowJobArgs {
  enable_streaming_engine?: boolean;
  ip_configuration?: string;
  kms_key_name?: string;
  labels?: {
    [key: string]: string;
  };
  machine_type?: string;
  max_workers?: number;
  name: string;
  network?: string;
  on_delete?: string;
  parameters?: {
    [key: string]: string;
  };
  region?: string;
  service_account_email?: string;
  skip_wait_on_job_termination?: boolean;
  subnetwork?: string;
  temp_gcs_location: string;
  template_gcs_path: string;
  transform_name_mapping?: {
    [key: string]: string;
  };
  zone?: string;
  timeouts?: GoogleDataflowJobArgsTimeouts;
}
export class google_dataflow_job extends TerraformResource {
  readonly additional_experiments?: string[];
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly job_id!: string;
  readonly project?: string;
  readonly state!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly type!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataflowJobArgs) {
    super(config, "resource", args, resourceName, "google_dataflow_job");
  }
}