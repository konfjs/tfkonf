import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleApigeeEnvKeystoreArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleApigeeEnvKeystoreArgs {
  env_id: string;
  name?: string;
  timeouts?: GoogleApigeeEnvKeystoreArgsTimeouts;
}
export class google_apigee_env_keystore extends TerraformResource {
  readonly aliases!: string[];
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleApigeeEnvKeystoreArgs) {
    super(config, "resource", args, resourceName, "google_apigee_env_keystore");
  }
}