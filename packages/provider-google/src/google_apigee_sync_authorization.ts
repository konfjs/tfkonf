import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleApigeeSyncAuthorizationArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleApigeeSyncAuthorizationArgs {
  identities: string[];
  name: string;
  timeouts: GoogleApigeeSyncAuthorizationArgstimeouts;
}
export class google_apigee_sync_authorization extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleApigeeSyncAuthorizationArgs) {
    super(config, "resource", args, resourceName, "google_apigee_sync_authorization");
  }
}