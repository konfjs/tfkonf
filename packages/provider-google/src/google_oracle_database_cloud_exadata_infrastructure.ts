import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleOracleDatabaseCloudExadataInfrastructureArgsPropertiesCustomerContacts {
  email: string;
}

export interface GoogleOracleDatabaseCloudExadataInfrastructureArgsPropertiesMaintenanceWindow {
}

export interface GoogleOracleDatabaseCloudExadataInfrastructureArgsProperties {
  compute_count?: number;
  shape: string;
  storage_count?: number;
  customer_contacts: GoogleOracleDatabaseCloudExadataInfrastructureArgsPropertiesCustomerContacts;
  maintenance_window: GoogleOracleDatabaseCloudExadataInfrastructureArgsPropertiesMaintenanceWindow;
}

export interface GoogleOracleDatabaseCloudExadataInfrastructureArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleOracleDatabaseCloudExadataInfrastructureArgs {
  cloud_exadata_infrastructure_id: string;
  display_name?: string;
  labels?: { [key: string]: string };
  location: string;
  properties: GoogleOracleDatabaseCloudExadataInfrastructureArgsProperties;
  timeouts?: GoogleOracleDatabaseCloudExadataInfrastructureArgsTimeouts;
}

export class google_oracle_database_cloud_exadata_infrastructure extends TerraformResource {
  readonly create_time!: string;
  readonly effective_labels!: { [key: string]: string };
  readonly entitlement_id!: string;
  readonly gcp_oracle_zone?: string;
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly terraform_labels!: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: GoogleOracleDatabaseCloudExadataInfrastructureArgs) {
    super(config, "resource", args, resourceName, "google_oracle_database_cloud_exadata_infrastructure");
  }
}
