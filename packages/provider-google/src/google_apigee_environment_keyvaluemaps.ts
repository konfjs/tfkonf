import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleApigeeEnvironmentKeyvaluemapsArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleApigeeEnvironmentKeyvaluemapsArgs {
  env_id: string;
  name: string;
  timeouts?: GoogleApigeeEnvironmentKeyvaluemapsArgsTimeouts;
}

export class google_apigee_environment_keyvaluemaps extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleApigeeEnvironmentKeyvaluemapsArgs) {
    super(config, "resource", args, resourceName, "google_apigee_environment_keyvaluemaps");
  }
}
