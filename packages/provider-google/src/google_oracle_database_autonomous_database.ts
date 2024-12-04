import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleOracleDatabaseAutonomousDatabaseArgsPropertiesCustomerContacts {
  email: string;
}

export interface GoogleOracleDatabaseAutonomousDatabaseArgsProperties {
  character_set?: string;
  db_edition?: string;
  db_version?: string;
  db_workload: string;
  is_auto_scaling_enabled?: boolean;
  license_type: string;
  mtls_connection_required?: boolean;
  n_character_set?: string;
  customer_contacts: GoogleOracleDatabaseAutonomousDatabaseArgsPropertiesCustomerContacts;
}

export interface GoogleOracleDatabaseAutonomousDatabaseArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleOracleDatabaseAutonomousDatabaseArgs {
  admin_password?: string;
  autonomous_database_id: string;
  cidr: string;
  database: string;
  labels?: { [key: string]: string };
  location: string;
  network: string;
  properties: GoogleOracleDatabaseAutonomousDatabaseArgsProperties;
  timeouts?: GoogleOracleDatabaseAutonomousDatabaseArgsTimeouts;
}

export class google_oracle_database_autonomous_database extends TerraformResource {
  readonly create_time!: string;
  readonly display_name?: string;
  readonly effective_labels!: { [key: string]: string };
  readonly entitlement_id!: string;
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly terraform_labels!: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: GoogleOracleDatabaseAutonomousDatabaseArgs) {
    super(config, "resource", args, resourceName, "google_oracle_database_autonomous_database");
  }
}
