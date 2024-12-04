import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBeyondcorpAppGatewayArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleBeyondcorpAppGatewayArgs {
  display_name?: string;
  host_type?: string;
  labels?: { [key: string]: string };
  name: string;
  region?: string;
  type?: string;
  timeouts?: GoogleBeyondcorpAppGatewayArgsTimeouts;
}

export class google_beyondcorp_app_gateway extends TerraformResource {
  readonly allocated_connections!: any[];
  readonly effective_labels!: { [key: string]: string };
  readonly id?: string;
  readonly project?: string;
  readonly state!: string;
  readonly terraform_labels!: { [key: string]: string };
  readonly uri!: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleBeyondcorpAppGatewayArgs) {
    super(config, "resource", args, resourceName, "google_beyondcorp_app_gateway");
  }
}
