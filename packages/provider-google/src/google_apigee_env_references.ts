import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleApigeeEnvReferencesArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleApigeeEnvReferencesArgs {
  description?: string;
  env_id: string;
  name: string;
  refers: string;
  resource_type: string;
  timeouts: GoogleApigeeEnvReferencesArgstimeouts;
}
export class google_apigee_env_references extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleApigeeEnvReferencesArgs) {
    super(config, "resource", args, resourceName, "google_apigee_env_references");
  }
}