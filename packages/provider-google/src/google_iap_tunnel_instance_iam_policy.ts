import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleIapTunnelInstanceIamPolicyArgs {
  instance: string;
  policy_data: string;
}

export class google_iap_tunnel_instance_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  readonly zone?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleIapTunnelInstanceIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_iap_tunnel_instance_iam_policy");
  }
}
