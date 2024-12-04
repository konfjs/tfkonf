import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleVmwareengineSubnetArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleVmwareengineSubnetArgs {
  ip_cidr_range: string;
  name: string;
  parent: string;
  timeouts?: GoogleVmwareengineSubnetArgsTimeouts;
}

export class google_vmwareengine_subnet extends TerraformResource {
  readonly create_time!: string;
  readonly dhcp_address_ranges!: any[];
  readonly gateway_id!: string;
  readonly gateway_ip!: string;
  readonly id?: string;
  readonly standard_config!: boolean;
  readonly state!: string;
  readonly type!: string;
  readonly uid!: string;
  readonly update_time!: string;
  readonly vlan_id!: number;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleVmwareengineSubnetArgs) {
    super(config, "resource", args, resourceName, "google_vmwareengine_subnet");
  }
}
