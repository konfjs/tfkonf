import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface VpcPeeringConfig {
  subnet: string;
  vpc_name: string;
}
export interface GoogleDatabaseMigrationServicePrivateConnectionArgs {
  labels?: {
    [key: string]: string;
  };
  location: string;
  private_connection_id: string;
  timeouts: Timeouts;
  vpc_peering_config: VpcPeeringConfig;
}
export class google_database_migration_service_private_connection extends TerraformResource {
  readonly display_name?: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly error!: any[];
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly state!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDatabaseMigrationServicePrivateConnectionArgs) {
    super(config, "resource", args, resourceName, "google_database_migration_service_private_connection");
  }
}