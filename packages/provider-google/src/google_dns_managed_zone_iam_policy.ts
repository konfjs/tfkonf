import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleDnsManagedZoneIamPolicyArgs {
  managed_zone: string;
  policy_data: string;
}
export class google_dns_managed_zone_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDnsManagedZoneIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_dns_managed_zone_iam_policy");
  }
}