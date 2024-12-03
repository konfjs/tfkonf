import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleOsLoginSshPublicKeyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleOsLoginSshPublicKeyArgs {
  expiration_time_usec?: string;
  key: string;
  project?: string;
  user: string;
  timeouts?: GoogleOsLoginSshPublicKeyArgsTimeouts;
}
export class google_os_login_ssh_public_key extends TerraformResource {
  readonly fingerprint!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleOsLoginSshPublicKeyArgs) {
    super(config, "resource", args, resourceName, "google_os_login_ssh_public_key");
  }
}