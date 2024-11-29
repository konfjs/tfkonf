import { TerraformConfig, TerraformResource } from "tfs";
export interface Property {
  name?: string;
  value?: string;
}
export interface Properties {
  property: Property;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleApigeeOrganizationArgs {
  analytics_region?: string;
  api_consumer_data_encryption_key_name?: string;
  api_consumer_data_location?: string;
  authorized_network?: string;
  control_plane_encryption_key_name?: string;
  description?: string;
  disable_vpc_peering?: boolean;
  display_name?: string;
  project_id: string;
  retention?: string;
  runtime_database_encryption_key_name?: string;
  runtime_type?: string;
  properties: Properties;
  timeouts: Timeouts;
}
export class google_apigee_organization extends TerraformResource {
  readonly apigee_project_id!: string;
  readonly billing_type?: string;
  readonly ca_certificate!: string;
  readonly id?: string;
  readonly name!: string;
  readonly subscription_type!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleApigeeOrganizationArgs) {
    super(config, "resource", args, resourceName, "google_apigee_organization");
  }
}