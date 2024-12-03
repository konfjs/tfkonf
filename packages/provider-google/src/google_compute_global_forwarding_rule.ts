import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleComputeGlobalForwardingRuleArgsMetadataFiltersFilterLabels {
  name: string;
  value: string;
}
export interface GoogleComputeGlobalForwardingRuleArgsMetadataFilters {
  filter_match_criteria: string;
  filter_labels: GoogleComputeGlobalForwardingRuleArgsMetadataFiltersFilterLabels;
}
export interface GoogleComputeGlobalForwardingRuleArgsServiceDirectoryRegistrations {
  service_directory_region?: string;
}
export interface GoogleComputeGlobalForwardingRuleArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeGlobalForwardingRuleArgs {
  description?: string;
  ip_version?: string;
  labels?: {
    [key: string]: string;
  };
  load_balancing_scheme?: string;
  name: string;
  no_automate_dns_zone?: boolean;
  port_range?: string;
  source_ip_ranges?: string[];
  target: string;
  metadata_filters: GoogleComputeGlobalForwardingRuleArgsMetadataFilters;
  service_directory_registrations: GoogleComputeGlobalForwardingRuleArgsServiceDirectoryRegistrations;
  timeouts?: GoogleComputeGlobalForwardingRuleArgsTimeouts;
}
export class google_compute_global_forwarding_rule extends TerraformResource {
  readonly base_forwarding_rule!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly ip_address?: string;
  readonly ip_protocol?: string;
  readonly label_fingerprint!: string;
  readonly network?: string;
  readonly project?: string;
  readonly psc_connection_id!: string;
  readonly psc_connection_status!: string;
  readonly self_link!: string;
  readonly subnetwork?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeGlobalForwardingRuleArgs) {
    super(config, "resource", args, resourceName, "google_compute_global_forwarding_rule");
  }
}