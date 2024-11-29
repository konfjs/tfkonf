import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleApigeeEnvironmentKeyvaluemapsArgstimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleApigeeEnvironmentKeyvaluemapsArgs {
  env_id: string;
  name: string;
  timeouts: GoogleApigeeEnvironmentKeyvaluemapsArgstimeouts;
}
export class google_apigee_environment_keyvaluemaps extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleApigeeEnvironmentKeyvaluemapsArgs) {
    super(config, "resource", args, resourceName, "google_apigee_environment_keyvaluemaps");
  }
}