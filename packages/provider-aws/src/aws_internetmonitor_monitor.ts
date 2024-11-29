import { TerraformConfig, TerraformResource } from "tfs";
export interface HealthEventsConfig {
  availability_score_threshold?: number;
  performance_score_threshold?: number;
}
export interface S3Config {
  bucket_name: string;
  bucket_prefix?: string;
  log_delivery_status?: string;
}
export interface InternetMeasurementsLogDelivery {
  s3_config: S3Config;
}
export interface AwsInternetmonitorMonitorArgs {
  max_city_networks_to_monitor?: number;
  monitor_name: string;
  resources?: string[];
  status?: string;
  tags?: {
    [key: string]: string;
  };
  traffic_percentage_to_monitor?: number;
  health_events_config: HealthEventsConfig;
  internet_measurements_log_delivery: InternetMeasurementsLogDelivery;
}
export class aws_internetmonitor_monitor extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsInternetmonitorMonitorArgs) {
    super(config, "resource", args, resourceName, "aws_internetmonitor_monitor");
  }
}