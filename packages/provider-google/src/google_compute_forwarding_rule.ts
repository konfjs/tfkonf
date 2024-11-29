import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleComputeForwardingRuleArgsServiceDirectoryRegistrations {
  service?: string;
}
export interface GoogleComputeForwardingRuleArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeForwardingRuleArgs {
  all_ports?: boolean;
  allow_global_access?: boolean;
  allow_psc_global_access?: boolean;
  backend_service?: string;
  description?: string;
  is_mirroring_collector?: boolean;
  labels?: {
    [key: string]: string;
  };
  load_balancing_scheme?: string;
  name: string;
  no_automate_dns_zone?: boolean;
  ports?: string[];
  recreate_closed_psc?: boolean;
  service_label?: string;
  source_ip_ranges?: string[];
  target?: string;
  service_directory_registrations: GoogleComputeForwardingRuleArgsServiceDirectoryRegistrations;
  timeouts: GoogleComputeForwardingRuleArgstimeouts;
}
export class google_compute_forwarding_rule extends TerraformResource {
  readonly base_forwarding_rule!: string;
  readonly creation_timestamp!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly forwarding_rule_id!: number;
  readonly id?: string;
  readonly ip_address?: string;
  readonly ip_protocol?: string;
  readonly ip_version?: string;
  readonly label_fingerprint!: string;
  readonly network?: string;
  readonly network_tier?: string;
  readonly port_range?: string;
  readonly project?: string;
  readonly psc_connection_id!: string;
  readonly psc_connection_status!: string;
  readonly region?: string;
  readonly self_link!: string;
  readonly service_name!: string;
  readonly subnetwork?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeForwardingRuleArgs) {
    super(config, "resource", args, resourceName, "google_compute_forwarding_rule");
  }
}