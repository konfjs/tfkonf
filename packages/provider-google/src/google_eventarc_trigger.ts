import { TerraformConfig, TerraformResource } from "tfs";
export interface CloudRunService {
  path?: string;
  service: string;
}
export interface Gke {
  cluster: string;
  location: string;
  namespace: string;
  path?: string;
  service: string;
}
export interface HttpEndpoint {
  uri: string;
}
export interface NetworkConfig {
  network_attachment: string;
}
export interface Destination {
  workflow?: string;
  cloud_run_service: CloudRunService;
  gke: Gke;
  http_endpoint: HttpEndpoint;
  network_config: NetworkConfig;
}
export interface MatchingCriteria {
  attribute: string;
  operator?: string;
  value: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface Pubsub {
  topic?: string;
}
export interface Transport {
  pubsub: Pubsub;
}
export interface GoogleEventarcTriggerArgs {
  channel?: string;
  labels?: {
    [key: string]: string;
  };
  location: string;
  name: string;
  service_account?: string;
  destination: Destination;
  matching_criteria: MatchingCriteria;
  timeouts: Timeouts;
  transport: Transport;
}
export class google_eventarc_trigger extends TerraformResource {
  readonly conditions!: {
    [key: string]: string;
  };
  readonly create_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly etag!: string;
  readonly event_data_content_type?: string;
  readonly id?: string;
  readonly project?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly uid!: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleEventarcTriggerArgs) {
    super(config, "resource", args, resourceName, "google_eventarc_trigger");
  }
}