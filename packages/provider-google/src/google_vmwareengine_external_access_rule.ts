import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleVmwareengineExternalAccessRuleArgsDestinationIpRanges {
  external_address?: string;
  ip_address_range?: string;
}
export interface GoogleVmwareengineExternalAccessRuleArgsSourceIpRanges {
  ip_address?: string;
  ip_address_range?: string;
}
export interface GoogleVmwareengineExternalAccessRuleArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleVmwareengineExternalAccessRuleArgs {
  action: string;
  description?: string;
  destination_ports: string[];
  ip_protocol: string;
  name: string;
  parent: string;
  priority: number;
  source_ports: string[];
  destination_ip_ranges: GoogleVmwareengineExternalAccessRuleArgsDestinationIpRanges;
  source_ip_ranges: GoogleVmwareengineExternalAccessRuleArgsSourceIpRanges;
  timeouts: GoogleVmwareengineExternalAccessRuleArgsTimeouts;
}
export class google_vmwareengine_external_access_rule extends TerraformResource {
  readonly create_time!: string;
  readonly id?: string;
  readonly state!: string;
  readonly uid!: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleVmwareengineExternalAccessRuleArgs) {
    super(config, "resource", args, resourceName, "google_vmwareengine_external_access_rule");
  }
}