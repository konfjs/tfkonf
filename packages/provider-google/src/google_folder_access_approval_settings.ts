import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleFolderAccessApprovalSettingsArgsEnrolledServices {
  cloud_product: string;
  enrollment_level?: string;
}
export interface GoogleFolderAccessApprovalSettingsArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleFolderAccessApprovalSettingsArgs {
  active_key_version?: string;
  folder_id: string;
  enrolled_services: GoogleFolderAccessApprovalSettingsArgsEnrolledServices;
  timeouts: GoogleFolderAccessApprovalSettingsArgstimeouts;
}
export class google_folder_access_approval_settings extends TerraformResource {
  readonly ancestor_has_active_key_version!: boolean;
  readonly enrolled_ancestor!: boolean;
  readonly id?: string;
  readonly invalid_key_version!: boolean;
  readonly name!: string;
  readonly notification_emails?: string[];
  constructor(config: TerraformConfig, resourceName: string, args: GoogleFolderAccessApprovalSettingsArgs) {
    super(config, "resource", args, resourceName, "google_folder_access_approval_settings");
  }
}