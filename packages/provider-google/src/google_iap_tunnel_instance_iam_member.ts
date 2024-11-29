import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleIapTunnelInstanceIamMemberArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleIapTunnelInstanceIamMemberArgs {
  instance: string;
  member: string;
  role: string;
  condition: GoogleIapTunnelInstanceIamMemberArgscondition;
}
export class google_iap_tunnel_instance_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  readonly zone?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleIapTunnelInstanceIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_iap_tunnel_instance_iam_member");
  }
}