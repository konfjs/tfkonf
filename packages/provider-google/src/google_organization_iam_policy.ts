import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleOrganizationIamPolicyArgs {
  org_id: string;
  policy_data: string;
}
export class google_organization_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleOrganizationIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_organization_iam_policy");
  }
}