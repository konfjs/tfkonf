import { TerraformConfig, TerraformResource } from "tfs";
export interface EncryptionSpec {
  kms_key_name: string;
}
export interface BigqueryDestination {
  output_uri?: string;
}
export interface PredictRequestResponseLoggingConfig {
  enabled?: boolean;
  sampling_rate?: number;
  bigquery_destination: BigqueryDestination;
}
export interface PrivateServiceConnectConfig {
  enable_private_service_connect: boolean;
  enable_secure_private_service_connect?: boolean;
  project_allowlist?: string[];
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleVertexAiEndpointArgs {
  dedicated_endpoint_enabled?: boolean;
  description?: string;
  display_name: string;
  labels?: {
    [key: string]: string;
  };
  location: string;
  name: string;
  network?: string;
  region?: string;
  encryption_spec: EncryptionSpec;
  predict_request_response_logging_config: PredictRequestResponseLoggingConfig;
  private_service_connect_config: PrivateServiceConnectConfig;
  timeouts: Timeouts;
}
export class google_vertex_ai_endpoint extends TerraformResource {
  readonly create_time!: string;
  readonly dedicated_endpoint_dns!: string;
  readonly deployed_models!: any[];
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly etag!: string;
  readonly id?: string;
  readonly model_deployment_monitoring_job!: string;
  readonly project?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly traffic_split?: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleVertexAiEndpointArgs) {
    super(config, "resource", args, resourceName, "google_vertex_ai_endpoint");
  }
}