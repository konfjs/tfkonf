import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleIapTunnelIamPolicyArgs {
  policy_data: string;
}
export class google_iap_tunnel_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleIapTunnelIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_iap_tunnel_iam_policy");
  }
}