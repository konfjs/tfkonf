import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleIapTunnelIamBindingArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleIapTunnelIamBindingArgs {
  members: string[];
  role: string;
  condition: GoogleIapTunnelIamBindingArgscondition;
}
export class google_iap_tunnel_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleIapTunnelIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_iap_tunnel_iam_binding");
  }
}