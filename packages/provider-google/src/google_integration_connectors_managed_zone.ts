import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleIntegrationConnectorsManagedZoneArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleIntegrationConnectorsManagedZoneArgs {
  description?: string;
  dns: string;
  labels?: {
    [key: string]: string;
  };
  name: string;
  target_project: string;
  target_vpc: string;
  timeouts?: GoogleIntegrationConnectorsManagedZoneArgsTimeouts;
}
export class google_integration_connectors_managed_zone extends TerraformResource {
  readonly create_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly project?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleIntegrationConnectorsManagedZoneArgs) {
    super(config, "resource", args, resourceName, "google_integration_connectors_managed_zone");
  }
}