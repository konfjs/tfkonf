import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleBeyondcorpAppConnectionArgsApplicationEndpoint {
  host: string;
  port: number;
}
export interface GoogleBeyondcorpAppConnectionArgsGateway {
  app_gateway: string;
  type?: string;
}
export interface GoogleBeyondcorpAppConnectionArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleBeyondcorpAppConnectionArgs {
  connectors?: string[];
  display_name?: string;
  labels?: {
    [key: string]: string;
  };
  name: string;
  region?: string;
  type?: string;
  application_endpoint: GoogleBeyondcorpAppConnectionArgsApplicationEndpoint;
  gateway: GoogleBeyondcorpAppConnectionArgsGateway;
  timeouts?: GoogleBeyondcorpAppConnectionArgsTimeouts;
}
export class google_beyondcorp_app_connection extends TerraformResource {
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly project?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: GoogleBeyondcorpAppConnectionArgs) {
    super(config, "resource", args, resourceName, "google_beyondcorp_app_connection");
  }
}