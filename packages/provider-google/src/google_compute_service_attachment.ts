import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleComputeServiceAttachmentArgsConsumerAcceptLists {
  connection_limit: number;
  network_url?: string;
  project_id_or_num?: string;
}
export interface GoogleComputeServiceAttachmentArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeServiceAttachmentArgs {
  connection_preference: string;
  consumer_reject_lists?: string[];
  description?: string;
  domain_names?: string[];
  enable_proxy_protocol: boolean;
  name: string;
  nat_subnets: string[];
  target_service: string;
  consumer_accept_lists: GoogleComputeServiceAttachmentArgsConsumerAcceptLists;
  timeouts: GoogleComputeServiceAttachmentArgsTimeouts;
}
export class google_compute_service_attachment extends TerraformResource {
  readonly connected_endpoints!: any[];
  readonly fingerprint!: string;
  readonly id?: string;
  readonly project?: string;
  readonly propagated_connection_limit?: number;
  readonly reconcile_connections?: boolean;
  readonly region?: string;
  readonly self_link!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeServiceAttachmentArgs) {
    super(config, "resource", args, resourceName, "google_compute_service_attachment");
  }
}