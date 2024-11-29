import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleApigeeSharedflowArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleApigeeSharedflowArgs {
  config_bundle: string;
  detect_md5hash?: string;
  name: string;
  org_id: string;
  timeouts: GoogleApigeeSharedflowArgstimeouts;
}
export class google_apigee_sharedflow extends TerraformResource {
  readonly id?: string;
  readonly latest_revision_id!: string;
  readonly md5hash!: string;
  readonly meta_data!: any[];
  readonly revision!: string[];
  constructor(config: TerraformConfig, resourceName: string, args: GoogleApigeeSharedflowArgs) {
    super(config, "resource", args, resourceName, "google_apigee_sharedflow");
  }
}