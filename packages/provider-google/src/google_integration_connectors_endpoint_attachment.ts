import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleIntegrationConnectorsEndpointAttachmentArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleIntegrationConnectorsEndpointAttachmentArgs {
  description?: string;
  endpoint_global_access?: boolean;
  labels?: {
    [key: string]: string;
  };
  location: string;
  name: string;
  service_attachment: string;
  timeouts: GoogleIntegrationConnectorsEndpointAttachmentArgsTimeouts;
}
export class google_integration_connectors_endpoint_attachment extends TerraformResource {
  readonly create_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly endpoint_ip!: string;
  readonly id?: string;
  readonly project?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleIntegrationConnectorsEndpointAttachmentArgs) {
    super(config, "resource", args, resourceName, "google_integration_connectors_endpoint_attachment");
  }
}