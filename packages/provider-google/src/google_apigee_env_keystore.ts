import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleApigeeEnvKeystoreArgstimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleApigeeEnvKeystoreArgs {
  env_id: string;
  name?: string;
  timeouts: GoogleApigeeEnvKeystoreArgstimeouts;
}
export class google_apigee_env_keystore extends TerraformResource {
  readonly aliases!: string[];
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleApigeeEnvKeystoreArgs) {
    super(config, "resource", args, resourceName, "google_apigee_env_keystore");
  }
}