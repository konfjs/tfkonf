import { TerraformConfig, TerraformResource } from "tfs";
export interface InitialConfig {
  default_branch?: string;
  gitignores?: string[];
  license?: string;
  readme?: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface GoogleSecureSourceManagerRepositoryArgs {
  description?: string;
  instance: string;
  location: string;
  repository_id: string;
  initial_config: InitialConfig;
  timeouts: Timeouts;
}
export class google_secure_source_manager_repository extends TerraformResource {
  readonly create_time!: string;
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly uid!: string;
  readonly update_time!: string;
  readonly uris!: any[];
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSecureSourceManagerRepositoryArgs) {
    super(config, "resource", args, resourceName, "google_secure_source_manager_repository");
  }
}