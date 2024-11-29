import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleDataPipelinePipelineArgsScheduleInfo {
  schedule?: string;
  time_zone?: string;
}
export interface GoogleDataPipelinePipelineArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDataPipelinePipelineArgsWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment {
  additional_experiments?: string[];
  additional_user_labels?: {
    [key: string]: string;
  };
  enable_streaming_engine?: boolean;
  flexrs_goal?: string;
  ip_configuration?: string;
  kms_key_name?: string;
  machine_type?: string;
  max_workers?: number;
  network?: string;
  num_workers?: number;
  service_account_email?: string;
  subnetwork?: string;
  temp_location?: string;
  worker_region?: string;
  worker_zone?: string;
  zone?: string;
}
export interface GoogleDataPipelinePipelineArgsWorkloadDataflowFlexTemplateRequestLaunchParameter {
  container_spec_gcs_path?: string;
  job_name: string;
  launch_options?: {
    [key: string]: string;
  };
  parameters?: {
    [key: string]: string;
  };
  transform_name_mappings?: {
    [key: string]: string;
  };
  update?: boolean;
  environment: GoogleDataPipelinePipelineArgsWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment;
}
export interface GoogleDataPipelinePipelineArgsWorkloadDataflowFlexTemplateRequest {
  location: string;
  project_id: string;
  validate_only?: boolean;
  launch_parameter: GoogleDataPipelinePipelineArgsWorkloadDataflowFlexTemplateRequestLaunchParameter;
}
export interface GoogleDataPipelinePipelineArgsWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment {
  additional_experiments?: string[];
  additional_user_labels?: {
    [key: string]: string;
  };
  bypass_temp_dir_validation?: boolean;
  enable_streaming_engine?: boolean;
  ip_configuration?: string;
  kms_key_name?: string;
  machine_type?: string;
  max_workers?: number;
  num_workers?: number;
  service_account_email?: string;
  subnetwork?: string;
  temp_location?: string;
  worker_region?: string;
  worker_zone?: string;
  zone?: string;
}
export interface GoogleDataPipelinePipelineArgsWorkloadDataflowLaunchTemplateRequestLaunchParameters {
  job_name: string;
  parameters?: {
    [key: string]: string;
  };
  transform_name_mapping?: {
    [key: string]: string;
  };
  update?: boolean;
  environment: GoogleDataPipelinePipelineArgsWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment;
}
export interface GoogleDataPipelinePipelineArgsWorkloadDataflowLaunchTemplateRequest {
  gcs_path?: string;
  location?: string;
  project_id: string;
  validate_only?: boolean;
  launch_parameters: GoogleDataPipelinePipelineArgsWorkloadDataflowLaunchTemplateRequestLaunchParameters;
}
export interface GoogleDataPipelinePipelineArgsWorkload {
  dataflow_flex_template_request: GoogleDataPipelinePipelineArgsWorkloadDataflowFlexTemplateRequest;
  dataflow_launch_template_request: GoogleDataPipelinePipelineArgsWorkloadDataflowLaunchTemplateRequest;
}
export interface GoogleDataPipelinePipelineArgs {
  display_name?: string;
  name: string;
  pipeline_sources?: {
    [key: string]: string;
  };
  region?: string;
  state: string;
  type: string;
  schedule_info: GoogleDataPipelinePipelineArgsScheduleInfo;
  timeouts: GoogleDataPipelinePipelineArgsTimeouts;
  workload: GoogleDataPipelinePipelineArgsWorkload;
}
export class google_data_pipeline_pipeline extends TerraformResource {
  readonly create_time!: string;
  readonly id?: string;
  readonly job_count!: number;
  readonly last_update_time!: string;
  readonly project?: string;
  readonly scheduler_service_account_email?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataPipelinePipelineArgs) {
    super(config, "resource", args, resourceName, "google_data_pipeline_pipeline");
  }
}