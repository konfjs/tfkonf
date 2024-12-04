import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleNetworkSecurityAddressGroupIamPolicyArgs {
  name: string;
  policy_data: string;
}

export class google_network_security_address_group_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleNetworkSecurityAddressGroupIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_network_security_address_group_iam_policy");
  }
}
