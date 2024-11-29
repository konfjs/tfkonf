import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsCloudfrontMonitoringSubscriptionArgsMonitoringSubscriptionRealtimeMetricsSubscriptionConfig {
  realtime_metrics_subscription_status: string;
}
export interface AwsCloudfrontMonitoringSubscriptionArgsMonitoringSubscription {
  realtime_metrics_subscription_config: AwsCloudfrontMonitoringSubscriptionArgsMonitoringSubscriptionRealtimeMetricsSubscriptionConfig;
}
export interface AwsCloudfrontMonitoringSubscriptionArgs {
  distribution_id: string;
  monitoring_subscription: AwsCloudfrontMonitoringSubscriptionArgsMonitoringSubscription;
}
export class aws_cloudfront_monitoring_subscription extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudfrontMonitoringSubscriptionArgs) {
    super(config, "resource", args, resourceName, "aws_cloudfront_monitoring_subscription");
  }
}