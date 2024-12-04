import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleIapTunnelDestGroupIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleIapTunnelDestGroupIamMemberArgs {
  dest_group: string;
  member: string;
  role: string;
  condition: GoogleIapTunnelDestGroupIamMemberArgsCondition;
}

export class google_iap_tunnel_dest_group_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  readonly region?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleIapTunnelDestGroupIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_iap_tunnel_dest_group_iam_member");
  }
}
