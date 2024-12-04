import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSccV2OrganizationSourceIamPolicyArgs {
  organization: string;
  policy_data: string;
  source: string;
}

export class google_scc_v2_organization_source_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleSccV2OrganizationSourceIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_scc_v2_organization_source_iam_policy");
  }
}
