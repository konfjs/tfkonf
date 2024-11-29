import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleApigeeNatAddressArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleApigeeNatAddressArgs {
  activate?: boolean;
  instance_id: string;
  name: string;
  timeouts: GoogleApigeeNatAddressArgstimeouts;
}
export class google_apigee_nat_address extends TerraformResource {
  readonly id?: string;
  readonly ip_address!: string;
  readonly state!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleApigeeNatAddressArgs) {
    super(config, "resource", args, resourceName, "google_apigee_nat_address");
  }
}