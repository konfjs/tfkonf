import { TerraformConfig, TerraformResource } from "tfs";
export interface CustomerContacts {
  email: string;
}
export interface MaintenanceWindow {}
export interface Properties {
  compute_count?: number;
  shape: string;
  storage_count?: number;
  customer_contacts: CustomerContacts;
  maintenance_window: MaintenanceWindow;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleOracleDatabaseCloudExadataInfrastructureArgs {
  cloud_exadata_infrastructure_id: string;
  display_name?: string;
  labels?: {
    [key: string]: string;
  };
  location: string;
  properties: Properties;
  timeouts: Timeouts;
}
export class google_oracle_database_cloud_exadata_infrastructure extends TerraformResource {
  readonly create_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly entitlement_id!: string;
  readonly gcp_oracle_zone?: string;
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: GoogleOracleDatabaseCloudExadataInfrastructureArgs) {
    super(config, "resource", args, resourceName, "google_oracle_database_cloud_exadata_infrastructure");
  }
}