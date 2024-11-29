import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleProjectAccessApprovalSettingsArgsEnrolledServices {
  cloud_product: string;
  enrollment_level?: string;
}
export interface GoogleProjectAccessApprovalSettingsArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleProjectAccessApprovalSettingsArgs {
  active_key_version?: string;
  project?: string;
  project_id: string;
  enrolled_services: GoogleProjectAccessApprovalSettingsArgsEnrolledServices;
  timeouts: GoogleProjectAccessApprovalSettingsArgsTimeouts;
}
export class google_project_access_approval_settings extends TerraformResource {
  readonly ancestor_has_active_key_version!: boolean;
  readonly enrolled_ancestor!: boolean;
  readonly id?: string;
  readonly invalid_key_version!: boolean;
  readonly name!: string;
  readonly notification_emails?: string[];
  constructor(config: TerraformConfig, resourceName: string, args: GoogleProjectAccessApprovalSettingsArgs) {
    super(config, "resource", args, resourceName, "google_project_access_approval_settings");
  }
}