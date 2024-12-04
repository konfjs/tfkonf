import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleVmwareengineExternalAddressArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleVmwareengineExternalAddressArgs {
  description?: string;
  internal_ip: string;
  name: string;
  parent: string;
  timeouts?: GoogleVmwareengineExternalAddressArgsTimeouts;
}

export class google_vmwareengine_external_address extends TerraformResource {
  readonly create_time!: string;
  readonly external_ip!: string;
  readonly id?: string;
  readonly state!: string;
  readonly uid!: string;
  readonly update_time!: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleVmwareengineExternalAddressArgs) {
    super(config, "resource", args, resourceName, "google_vmwareengine_external_address");
  }
}
