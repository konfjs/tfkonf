import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleMonitoringNotificationChannelArgsSensitiveLabels {
  auth_token?: string;
  password?: string;
  service_key?: string;
}
export interface GoogleMonitoringNotificationChannelArgsTimeouts {
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
  sensitive_labels: GoogleMonitoringNotificationChannelArgsSensitiveLabels;
  timeouts?: GoogleMonitoringNotificationChannelArgsTimeouts;
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