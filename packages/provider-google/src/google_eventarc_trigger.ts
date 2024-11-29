import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleEventarcTriggerArgsDestinationCloudRunService {
  path?: string;
  service: string;
}
export interface GoogleEventarcTriggerArgsDestinationGke {
  cluster: string;
  location: string;
  namespace: string;
  path?: string;
  service: string;
}
export interface GoogleEventarcTriggerArgsDestinationHttpEndpoint {
  uri: string;
}
export interface GoogleEventarcTriggerArgsDestinationNetworkConfig {
  network_attachment: string;
}
export interface GoogleEventarcTriggerArgsDestination {
  workflow?: string;
  cloud_run_service: GoogleEventarcTriggerArgsDestinationCloudRunService;
  gke: GoogleEventarcTriggerArgsDestinationGke;
  http_endpoint: GoogleEventarcTriggerArgsDestinationHttpEndpoint;
  network_config: GoogleEventarcTriggerArgsDestinationNetworkConfig;
}
export interface GoogleEventarcTriggerArgsMatchingCriteria {
  attribute: string;
  operator?: string;
  value: string;
}
export interface GoogleEventarcTriggerArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleEventarcTriggerArgsTransportPubsub {
  topic?: string;
}
export interface GoogleEventarcTriggerArgsTransport {
  pubsub: GoogleEventarcTriggerArgsTransportPubsub;
}
export interface GoogleEventarcTriggerArgs {
  channel?: string;
  labels?: {
    [key: string]: string;
  };
  location: string;
  name: string;
  service_account?: string;
  destination: GoogleEventarcTriggerArgsDestination;
  matching_criteria: GoogleEventarcTriggerArgsMatchingCriteria;
  timeouts: GoogleEventarcTriggerArgsTimeouts;
  transport: GoogleEventarcTriggerArgsTransport;
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