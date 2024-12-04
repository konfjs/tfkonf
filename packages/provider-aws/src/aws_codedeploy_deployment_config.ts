import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCodedeployDeploymentConfigArgsMinimumHealthyHosts {
  type?: string;
  value?: number;
}

export interface AwsCodedeployDeploymentConfigArgsTrafficRoutingConfigTimeBasedCanary {
  interval?: number;
  percentage?: number;
}

export interface AwsCodedeployDeploymentConfigArgsTrafficRoutingConfigTimeBasedLinear {
  interval?: number;
  percentage?: number;
}

export interface AwsCodedeployDeploymentConfigArgsTrafficRoutingConfig {
  type?: string;
  time_based_canary: AwsCodedeployDeploymentConfigArgsTrafficRoutingConfigTimeBasedCanary;
  time_based_linear: AwsCodedeployDeploymentConfigArgsTrafficRoutingConfigTimeBasedLinear;
}

export interface AwsCodedeployDeploymentConfigArgsZonalConfigMinimumHealthyHostsPerZone {
  type?: string;
  value?: number;
}

export interface AwsCodedeployDeploymentConfigArgsZonalConfig {
  first_zone_monitor_duration_in_seconds?: number;
  monitor_duration_in_seconds?: number;
  minimum_healthy_hosts_per_zone: AwsCodedeployDeploymentConfigArgsZonalConfigMinimumHealthyHostsPerZone;
}

export interface AwsCodedeployDeploymentConfigArgs {
  compute_platform?: string;
  deployment_config_name: string;
  minimum_healthy_hosts: AwsCodedeployDeploymentConfigArgsMinimumHealthyHosts;
  traffic_routing_config: AwsCodedeployDeploymentConfigArgsTrafficRoutingConfig;
  zonal_config: AwsCodedeployDeploymentConfigArgsZonalConfig;
}

export class aws_codedeploy_deployment_config extends TerraformResource {
  readonly arn!: string;
  readonly deployment_config_id!: string;
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsCodedeployDeploymentConfigArgs) {
    super(config, "resource", args, resourceName, "aws_codedeploy_deployment_config");
  }
}
