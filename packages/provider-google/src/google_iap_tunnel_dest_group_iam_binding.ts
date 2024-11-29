import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleIapTunnelDestGroupIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleIapTunnelDestGroupIamBindingArgs {
  dest_group: string;
  members: string[];
  role: string;
  condition: GoogleIapTunnelDestGroupIamBindingArgsCondition;
}
export class google_iap_tunnel_dest_group_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  readonly region?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleIapTunnelDestGroupIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_iap_tunnel_dest_group_iam_binding");
  }
}