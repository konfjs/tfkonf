import { TerraformConfig, TerraformResource } from "tfs";
export interface RealtimeMetricsSubscriptionConfig {
  realtime_metrics_subscription_status: string;
}
export interface MonitoringSubscription {
  realtime_metrics_subscription_config: RealtimeMetricsSubscriptionConfig;
}
export interface AwsCloudfrontMonitoringSubscriptionArgs {
  distribution_id: string;
  monitoring_subscription: MonitoringSubscription;
}
export class aws_cloudfront_monitoring_subscription extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudfrontMonitoringSubscriptionArgs) {
    super(config, "resource", args, resourceName, "aws_cloudfront_monitoring_subscription");
  }
}