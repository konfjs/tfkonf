import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleApigeeInstanceArgs {
  description?: string;
  disk_encryption_key_name?: string;
  display_name?: string;
  ip_range?: string;
  location: string;
  name: string;
  org_id: string;
  timeouts: Timeouts;
}
export class google_apigee_instance extends TerraformResource {
  readonly consumer_accept_list?: string[];
  readonly host!: string;
  readonly id?: string;
  readonly peering_cidr_range?: string;
  readonly port!: string;
  readonly service_attachment!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleApigeeInstanceArgs) {
    super(config, "resource", args, resourceName, "google_apigee_instance");
  }
}