import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleDnsManagedZoneIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleDnsManagedZoneIamBindingArgs {
  managed_zone: string;
  members: string[];
  role: string;
  condition: GoogleDnsManagedZoneIamBindingArgsCondition;
}
export class google_dns_managed_zone_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDnsManagedZoneIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_dns_managed_zone_iam_binding");
  }
}