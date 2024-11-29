import { TerraformConfig, TerraformResource } from "tfs";
export interface MinimumHealthyHosts {
  type?: string;
  value?: number;
}
export interface TimeBasedCanary {
  interval?: number;
  percentage?: number;
}
export interface TimeBasedLinear {
  interval?: number;
  percentage?: number;
}
export interface TrafficRoutingConfig {
  type?: string;
  time_based_canary: TimeBasedCanary;
  time_based_linear: TimeBasedLinear;
}
export interface MinimumHealthyHostsPerZone {
  type?: string;
  value?: number;
}
export interface ZonalConfig {
  first_zone_monitor_duration_in_seconds?: number;
  monitor_duration_in_seconds?: number;
  minimum_healthy_hosts_per_zone: MinimumHealthyHostsPerZone;
}
export interface AwsCodedeployDeploymentConfigArgs {
  compute_platform?: string;
  deployment_config_name: string;
  minimum_healthy_hosts: MinimumHealthyHosts;
  traffic_routing_config: TrafficRoutingConfig;
  zonal_config: ZonalConfig;
}
export class aws_codedeploy_deployment_config extends TerraformResource {
  readonly arn!: string;
  readonly deployment_config_id!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCodedeployDeploymentConfigArgs) {
    super(config, "resource", args, resourceName, "aws_codedeploy_deployment_config");
  }
}