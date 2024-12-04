import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GooglePrivatecaCaPoolIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GooglePrivatecaCaPoolIamMemberArgs {
  ca_pool: string;
  member: string;
  role: string;
  condition: GooglePrivatecaCaPoolIamMemberArgsCondition;
}

export class google_privateca_ca_pool_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GooglePrivatecaCaPoolIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_privateca_ca_pool_iam_member");
  }
}
