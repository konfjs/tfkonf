import { TerraformConfig, TerraformResource } from "tfs";
export interface Condition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleDnsManagedZoneIamMemberArgs {
  managed_zone: string;
  member: string;
  role: string;
  condition: Condition;
}
export class google_dns_managed_zone_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDnsManagedZoneIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_dns_managed_zone_iam_member");
  }
}