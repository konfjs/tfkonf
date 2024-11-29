import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsRumAppMonitorArgsAppMonitorConfiguration {
  allow_cookies?: boolean;
  enable_xray?: boolean;
  excluded_pages?: string[];
  favorite_pages?: string[];
  guest_role_arn?: string;
  identity_pool_id?: string;
  included_pages?: string[];
  session_sample_rate?: number;
  telemetries?: string[];
}
export interface AwsRumAppMonitorArgsCustomEvents {
  status?: string;
}
export interface AwsRumAppMonitorArgs {
  cw_log_enabled?: boolean;
  domain: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  app_monitor_configuration: AwsRumAppMonitorArgsAppMonitorConfiguration;
  custom_events: AwsRumAppMonitorArgsCustomEvents;
}
export class aws_rum_app_monitor extends TerraformResource {
  readonly app_monitor_id!: string;
  readonly arn!: string;
  readonly cw_log_group!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsRumAppMonitorArgs) {
    super(config, "resource", args, resourceName, "aws_rum_app_monitor");
  }
}