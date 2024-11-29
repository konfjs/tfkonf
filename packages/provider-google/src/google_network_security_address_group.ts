import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleNetworkSecurityAddressGroupArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleNetworkSecurityAddressGroupArgs {
  capacity: number;
  description?: string;
  items?: string[];
  labels?: {
    [key: string]: string;
  };
  location: string;
  name: string;
  parent?: string;
  type: string;
  timeouts: GoogleNetworkSecurityAddressGroupArgsTimeouts;
}
export class google_network_security_address_group extends TerraformResource {
  readonly create_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleNetworkSecurityAddressGroupArgs) {
    super(config, "resource", args, resourceName, "google_network_security_address_group");
  }
}