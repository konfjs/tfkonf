import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleLookerInstanceArgsAdminSettings {
  allowed_email_domains?: string[];
}

export interface GoogleLookerInstanceArgsCustomDomain {
  domain?: string;
}

export interface GoogleLookerInstanceArgsDenyMaintenancePeriodEndDate {
  day?: number;
  month?: number;
  year?: number;
}

export interface GoogleLookerInstanceArgsDenyMaintenancePeriodStartDate {
  day?: number;
  month?: number;
  year?: number;
}

export interface GoogleLookerInstanceArgsDenyMaintenancePeriodTime {
  hours?: number;
  minutes?: number;
  nanos?: number;
  seconds?: number;
}

export interface GoogleLookerInstanceArgsDenyMaintenancePeriod {
  end_date: GoogleLookerInstanceArgsDenyMaintenancePeriodEndDate;
  start_date: GoogleLookerInstanceArgsDenyMaintenancePeriodStartDate;
  time: GoogleLookerInstanceArgsDenyMaintenancePeriodTime;
}

export interface GoogleLookerInstanceArgsEncryptionConfig {
  kms_key_name?: string;
}

export interface GoogleLookerInstanceArgsMaintenanceWindowStartTime {
  hours?: number;
  minutes?: number;
  nanos?: number;
  seconds?: number;
}

export interface GoogleLookerInstanceArgsMaintenanceWindow {
  day_of_week: string;
  start_time: GoogleLookerInstanceArgsMaintenanceWindowStartTime;
}

export interface GoogleLookerInstanceArgsOauthConfig {
  client_id: string;
  client_secret: string;
}

export interface GoogleLookerInstanceArgsPscConfigServiceAttachments {
  local_fqdn?: string;
  target_service_attachment_uri?: string;
}

export interface GoogleLookerInstanceArgsPscConfig {
  allowed_vpcs?: string[];
  service_attachments: GoogleLookerInstanceArgsPscConfigServiceAttachments;
}

export interface GoogleLookerInstanceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleLookerInstanceArgsUserMetadata {
  additional_developer_user_count?: number;
  additional_standard_user_count?: number;
  additional_viewer_user_count?: number;
}

export interface GoogleLookerInstanceArgs {
  consumer_network?: string;
  deletion_policy?: string;
  fips_enabled?: boolean;
  name: string;
  platform_edition?: string;
  private_ip_enabled?: boolean;
  psc_enabled?: boolean;
  public_ip_enabled?: boolean;
  reserved_range?: string;
  admin_settings: GoogleLookerInstanceArgsAdminSettings;
  custom_domain: GoogleLookerInstanceArgsCustomDomain;
  deny_maintenance_period: GoogleLookerInstanceArgsDenyMaintenancePeriod;
  encryption_config: GoogleLookerInstanceArgsEncryptionConfig;
  maintenance_window: GoogleLookerInstanceArgsMaintenanceWindow;
  oauth_config: GoogleLookerInstanceArgsOauthConfig;
  psc_config: GoogleLookerInstanceArgsPscConfig;
  timeouts?: GoogleLookerInstanceArgsTimeouts;
  user_metadata: GoogleLookerInstanceArgsUserMetadata;
}

export class google_looker_instance extends TerraformResource {
  readonly create_time!: string;
  readonly egress_public_ip!: string;
  readonly id?: string;
  readonly ingress_private_ip!: string;
  readonly ingress_public_ip!: string;
  readonly looker_uri!: string;
  readonly looker_version!: string;
  readonly project?: string;
  readonly region?: string;
  readonly update_time!: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleLookerInstanceArgs) {
    super(config, "resource", args, resourceName, "google_looker_instance");
  }
}
