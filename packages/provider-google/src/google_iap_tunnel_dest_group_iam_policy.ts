import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleIapTunnelDestGroupIamPolicyArgs {
  dest_group: string;
  policy_data: string;
}
export class google_iap_tunnel_dest_group_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  readonly region?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleIapTunnelDestGroupIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_iap_tunnel_dest_group_iam_policy");
  }
}