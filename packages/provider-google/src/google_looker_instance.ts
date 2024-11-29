import { TerraformConfig, TerraformResource } from "tfs";
export interface AdminSettings {
  allowed_email_domains?: string[];
}
export interface CustomDomain {
  domain?: string;
}
export interface EndDate {
  day?: number;
  month?: number;
  year?: number;
}
export interface StartDate {
  day?: number;
  month?: number;
  year?: number;
}
export interface Time {
  hours?: number;
  minutes?: number;
  nanos?: number;
  seconds?: number;
}
export interface DenyMaintenancePeriod {
  end_date: EndDate;
  start_date: StartDate;
  time: Time;
}
export interface EncryptionConfig {
  kms_key_name?: string;
}
export interface StartTime {
  hours?: number;
  minutes?: number;
  nanos?: number;
  seconds?: number;
}
export interface MaintenanceWindow {
  day_of_week: string;
  start_time: StartTime;
}
export interface OauthConfig {
  client_id: string;
  client_secret: string;
}
export interface ServiceAttachments {
  local_fqdn?: string;
  target_service_attachment_uri?: string;
}
export interface PscConfig {
  allowed_vpcs?: string[];
  service_attachments: ServiceAttachments;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface UserMetadata {
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
  admin_settings: AdminSettings;
  custom_domain: CustomDomain;
  deny_maintenance_period: DenyMaintenancePeriod;
  encryption_config: EncryptionConfig;
  maintenance_window: MaintenanceWindow;
  oauth_config: OauthConfig;
  psc_config: PscConfig;
  timeouts: Timeouts;
  user_metadata: UserMetadata;
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