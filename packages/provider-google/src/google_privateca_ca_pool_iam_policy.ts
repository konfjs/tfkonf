import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GooglePrivatecaCaPoolIamPolicyArgs {
  ca_pool: string;
  policy_data: string;
}

export class google_privateca_ca_pool_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GooglePrivatecaCaPoolIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_privateca_ca_pool_iam_policy");
  }
}
