import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleNetworkServicesGatewayArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleNetworkServicesGatewayArgs {
  certificate_urls?: string[];
  delete_swg_autogen_router_on_destroy?: boolean;
  description?: string;
  gateway_security_policy?: string;
  labels?: { [key: string]: string };
  location?: string;
  name: string;
  network?: string;
  ports: number[];
  routing_mode?: string;
  scope?: string;
  server_tls_policy?: string;
  subnetwork?: string;
  type: string;
  timeouts?: GoogleNetworkServicesGatewayArgsTimeouts;
}

export class google_network_services_gateway extends TerraformResource {
  readonly addresses?: string[];
  readonly create_time!: string;
  readonly effective_labels!: { [key: string]: string };
  readonly id?: string;
  readonly project?: string;
  readonly self_link!: string;
  readonly terraform_labels!: { [key: string]: string };
  readonly update_time!: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleNetworkServicesGatewayArgs) {
    super(config, "resource", args, resourceName, "google_network_services_gateway");
  }
}
