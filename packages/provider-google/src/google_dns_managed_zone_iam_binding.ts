import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleDnsManagedZoneIamBindingArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleDnsManagedZoneIamBindingArgs {
  managed_zone: string;
  members: string[];
  role: string;
  condition: GoogleDnsManagedZoneIamBindingArgscondition;
}
export class google_dns_managed_zone_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDnsManagedZoneIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_dns_managed_zone_iam_binding");
  }
}