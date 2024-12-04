import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleIapTunnelInstanceIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleIapTunnelInstanceIamBindingArgs {
  instance: string;
  members: string[];
  role: string;
  condition: GoogleIapTunnelInstanceIamBindingArgsCondition;
}

export class google_iap_tunnel_instance_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  readonly zone?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleIapTunnelInstanceIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_iap_tunnel_instance_iam_binding");
  }
}
