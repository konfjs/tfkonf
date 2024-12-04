import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleOrganizationAccessApprovalSettingsArgsEnrolledServices {
  cloud_product: string;
  enrollment_level?: string;
}

export interface GoogleOrganizationAccessApprovalSettingsArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleOrganizationAccessApprovalSettingsArgs {
  active_key_version?: string;
  organization_id: string;
  enrolled_services: GoogleOrganizationAccessApprovalSettingsArgsEnrolledServices;
  timeouts?: GoogleOrganizationAccessApprovalSettingsArgsTimeouts;
}

export class google_organization_access_approval_settings extends TerraformResource {
  readonly ancestor_has_active_key_version!: boolean;
  readonly enrolled_ancestor!: boolean;
  readonly id?: string;
  readonly invalid_key_version!: boolean;
  readonly name!: string;
  readonly notification_emails?: string[];

  constructor(config: TerraformConfig, resourceName: string, args: GoogleOrganizationAccessApprovalSettingsArgs) {
    super(config, "resource", args, resourceName, "google_organization_access_approval_settings");
  }
}
