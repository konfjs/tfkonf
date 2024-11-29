import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface GoogleApigeeEnvironmentKeyvaluemapsEntriesArgs {
  env_keyvaluemap_id: string;
  name: string;
  value: string;
  timeouts: Timeouts;
}
export class google_apigee_environment_keyvaluemaps_entries extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleApigeeEnvironmentKeyvaluemapsEntriesArgs) {
    super(config, "resource", args, resourceName, "google_apigee_environment_keyvaluemaps_entries");
  }
}