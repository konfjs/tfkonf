import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleAlloydbUserArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleAlloydbUserArgs {
  cluster: string;
  database_roles?: string[];
  password?: string;
  user_id: string;
  user_type: string;
  timeouts: GoogleAlloydbUserArgstimeouts;
}
export class google_alloydb_user extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleAlloydbUserArgs) {
    super(config, "resource", args, resourceName, "google_alloydb_user");
  }
}