import { TerraformConfig, TerraformResource } from "tfs";
export interface ApplicationEndpoint {
  host: string;
  port: number;
}
export interface Gateway {
  app_gateway: string;
  type?: string;
}
export interface Timeouts {
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
  application_endpoint: ApplicationEndpoint;
  gateway: Gateway;
  timeouts: Timeouts;
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