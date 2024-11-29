import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleApigeeEnvironmentKeyvaluemapsEntriesArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleApigeeEnvironmentKeyvaluemapsEntriesArgs {
  env_keyvaluemap_id: string;
  name: string;
  value: string;
  timeouts?: GoogleApigeeEnvironmentKeyvaluemapsEntriesArgsTimeouts;
}
export class google_apigee_environment_keyvaluemaps_entries extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleApigeeEnvironmentKeyvaluemapsEntriesArgs) {
    super(config, "resource", args, resourceName, "google_apigee_environment_keyvaluemaps_entries");
  }
}