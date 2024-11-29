import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleEventarcTriggerArgsdestinationCloudRunService {
  path?: string;
  service: string;
}
export interface GoogleEventarcTriggerArgsdestinationgke {
  cluster: string;
  location: string;
  namespace: string;
  path?: string;
  service: string;
}
export interface GoogleEventarcTriggerArgsdestinationHttpEndpoint {
  uri: string;
}
export interface GoogleEventarcTriggerArgsdestinationNetworkConfig {
  network_attachment: string;
}
export interface GoogleEventarcTriggerArgsdestination {
  workflow?: string;
  cloud_run_service: GoogleEventarcTriggerArgsdestinationCloudRunService;
  gke: GoogleEventarcTriggerArgsdestinationgke;
  http_endpoint: GoogleEventarcTriggerArgsdestinationHttpEndpoint;
  network_config: GoogleEventarcTriggerArgsdestinationNetworkConfig;
}
export interface GoogleEventarcTriggerArgsMatchingCriteria {
  attribute: string;
  operator?: string;
  value: string;
}
export interface GoogleEventarcTriggerArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleEventarcTriggerArgstransportpubsub {
  topic?: string;
}
export interface GoogleEventarcTriggerArgstransport {
  pubsub: GoogleEventarcTriggerArgstransportpubsub;
}
export interface GoogleEventarcTriggerArgs {
  channel?: string;
  labels?: {
    [key: string]: string;
  };
  location: string;
  name: string;
  service_account?: string;
  destination: GoogleEventarcTriggerArgsdestination;
  matching_criteria: GoogleEventarcTriggerArgsMatchingCriteria;
  timeouts: GoogleEventarcTriggerArgstimeouts;
  transport: GoogleEventarcTriggerArgstransport;
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