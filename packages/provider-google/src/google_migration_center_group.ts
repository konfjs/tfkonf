import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleMigrationCenterGroupArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleMigrationCenterGroupArgs {
  description?: string;
  display_name?: string;
  group_id: string;
  labels?: {
    [key: string]: string;
  };
  location: string;
  timeouts?: GoogleMigrationCenterGroupArgsTimeouts;
}
export class google_migration_center_group extends TerraformResource {
  readonly create_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleMigrationCenterGroupArgs) {
    super(config, "resource", args, resourceName, "google_migration_center_group");
  }
}