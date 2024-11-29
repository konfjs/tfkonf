import { TerraformConfig, TerraformResource } from "tfs";
export interface SensitiveLabels {
  auth_token?: string;
  password?: string;
  service_key?: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleMonitoringNotificationChannelArgs {
  description?: string;
  display_name?: string;
  enabled?: boolean;
  force_delete?: boolean;
  labels?: {
    [key: string]: string;
  };
  type: string;
  user_labels?: {
    [key: string]: string;
  };
  sensitive_labels: SensitiveLabels;
  timeouts: Timeouts;
}
export class google_monitoring_notification_channel extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly verification_status!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleMonitoringNotificationChannelArgs) {
    super(config, "resource", args, resourceName, "google_monitoring_notification_channel");
  }
}