import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleIapTunnelIamMemberArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleIapTunnelIamMemberArgs {
  member: string;
  role: string;
  condition: GoogleIapTunnelIamMemberArgscondition;
}
export class google_iap_tunnel_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleIapTunnelIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_iap_tunnel_iam_member");
  }
}