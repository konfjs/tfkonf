import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVpcNetworkPerformanceMetricSubscriptionArgs {
  destination: string;
  metric?: string;
  source: string;
  statistic?: string;
}

export class aws_vpc_network_performance_metric_subscription extends TerraformResource {
  readonly id?: string;
  readonly period!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsVpcNetworkPerformanceMetricSubscriptionArgs) {
    super(config, "resource", args, resourceName, "aws_vpc_network_performance_metric_subscription");
  }
}
