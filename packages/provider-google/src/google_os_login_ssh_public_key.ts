import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleOsLoginSshPublicKeyArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleOsLoginSshPublicKeyArgs {
  expiration_time_usec?: string;
  key: string;
  project?: string;
  user: string;
  timeouts: GoogleOsLoginSshPublicKeyArgstimeouts;
}
export class google_os_login_ssh_public_key extends TerraformResource {
  readonly fingerprint!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleOsLoginSshPublicKeyArgs) {
    super(config, "resource", args, resourceName, "google_os_login_ssh_public_key");
  }
}